
import { createClient } from "redis";



const redis = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379"
})


redis.connect().catch((err) => { console.error("Redis connection error:", err); }); 


export default redis;