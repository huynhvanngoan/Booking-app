export const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { Worker } = await import("bullmq");
        const { connection } = await import("@/lib");

        new Worker("jobsQueue", async (job) => {}, {
            connection,
            concurrency: 10,
            removeOnComplete: { count: 1000 },
            removeOnFail: { count: 5000 },
        });
    }
};
