import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();


export const redis = new Redis(process.env.Redis_URI);
// await client.set('foo', 'bar');