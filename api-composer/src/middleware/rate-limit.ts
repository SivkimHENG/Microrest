import { NextFunction } from "express";
import { RedisClientType } from "redis";
import { cacheService } from "../services/cache-service";




interface RateLimitConfig {
    windowMs: number;
    limit: number;
    prefix?: string;
}


export class RedisRateLimiter {

    private redis: RedisClientType;
    private windowMs: number
    private limit: number
    private prefix: string

    constructor(redis: RedisClientType, config: RateLimitConfig) {
        this.redis = redis;
        this.windowMs = config.windowMs;
        this.limit = config.limit;
        this.prefix = config.prefix || "rate";
    }

    private buildKey(identifier: string): string {
        const windowIndex = Math.floor(Date.now() / this.windowMs);
        return `${this.prefix}:${identifier}`;
    }

    middleware() {

        return async (req: any, res: any, next: any) => {
            const identifier = req.ip;
            const key = this.buildKey(identifier);

            const localCount = cacheService.get(key);
            if (localCount !== undefined && localCount >= this.limit) {
                return res.status(429).json({ message: "Rate limit exceed (local)" });
            }
            try {
                const redisCount = await this.redis.incr(key);

                if (redisCount === 1) {
                    await this.redis.pExpire(key, this.windowMs);
                }

                cacheService.set(key, redisCount, this.windowMs / 1000);

                if (redisCount > this.limit) {
                    return res.status(429).json({ message: "Rate limit exceed" });
                }
                return next();
            } catch (err) {
                console.error("Rate limiter error:", err);

                const count = (cacheService.get(key) ?? 0) + 1;

                if (count > this.limit) {
                    return res.status(429).json({ message: "Rate limit exceed (local fallback)" });
                }

                cacheService.set(key, count, this.windowMs / 1000);

                return next();
            }
        }


    }


}



