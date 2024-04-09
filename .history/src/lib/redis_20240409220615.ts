import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL =
    process.env.REDIS_URL ||
    "rediss://aptible:P2eEp7kFHDfr3vycD8ldPIdDeJctBthw@db-shared-us-west-1-127937.aptible.in:29825";

const connection = new Redis(REDIS_URL, { maxRetriesPerRequest: null });

export { connection };
