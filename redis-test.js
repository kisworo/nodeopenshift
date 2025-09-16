const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD || undefined // isi kalau Redis pakai auth
});

redis.set("hello", "openshift");
redis.get("hello").then(val => console.log("Redis says:", val));