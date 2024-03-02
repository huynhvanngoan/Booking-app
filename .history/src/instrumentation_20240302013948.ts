import { tryCatch } from "bullmq";

export const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { Worker } = await import("bullmq");
        const { connection } = await import("@/lib/redis");
        const puppeteer = await import("puppeteer");
        const SBR_WS_ENDPOINT =
            "wss://brd-customer-hl_420a6c24-zone-booking_browser:f79yec5fvnct@brd.superproxy.io:9222";
        new Worker(
            "importQueue",
            async (job) => {
                tryCatch
                const browser = await puppeteer.connect({
                    browserWSEndpoint: SBR_WS_ENDPOINT,
                });
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
