import Redis from "ioredis";

// You can get the REDIS_URL from your environment variables
const REDIS_URL =
    process.env.REDIS_URL ||
    "redis://localhost:redis://aptible:dUd2V4fZjmBXqSPAfR8NTKb0uDCaIo7j@db-shared-us-east-1-wat-122849.aptible.in:29679";

const connection = new Redis(REDIS_URL, { max});

export { connection };
