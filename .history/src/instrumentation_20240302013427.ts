export const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { Worker } = await import("bullmq");
        const { connection } = await import("@/lib/redis");
        const puppeteer = await import('puppeteer');
        new Worker(
            "importQueue",
            async (job) => {
                
                

                const browser = await puppeteer.connect({browserWSEndpoint})
            },
            {
                connection,
                concurrency: 10,
                removeOnComplete: { count: 1000 },
                removeOnFail: { count: 5000 },
            }
        );
    }
};
