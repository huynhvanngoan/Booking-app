import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:rediss://aptible:dUd2V4fZjmBXqSPAfR8NTKb0uDCaIo7j@db-shared-us-east-1-wat-122849.aptible.in:29679";

export const connection = new Redis(REDIS_URL, { maxRetriesPerRequest: null });
