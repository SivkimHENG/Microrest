import { CacheService } from "../services/cache-service";
import { HttpService } from "../services/http-service";
import redis from "../services/redis-service";



export class BaseComposer {

    protected http: HttpService;
    protected cache: CacheService;


    constructor(http: HttpService, cache: CacheService) {
        this.http = http;
        this.cache = cache;
    }


    protected async cachedGet(key: string, url: string, ttl: number = 300): Promise<any> {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        const data = await this.http.get(url, redis);
        this.cache.set(key, data, ttl);

        return data;
    }




}