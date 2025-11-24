import NodeCache from "node-cache";

export class CacheService {
  private cache: NodeCache;
  constructor() {
    this.cache = new NodeCache({
      stdTTL: 300,
      checkperiod: 60,
    });
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  set(key: string, value: any, ttl: number = 300): void {
    this.cache.set(key, value, ttl);
  }

  del(key: string) {
    return this.cache.del(key);
  }

  flush(): void {
    this.cache.flushAll();
  }
  has(key: string): boolean {
    return this.cache.has(key);
  }
}

export const cacheService = new CacheService();
