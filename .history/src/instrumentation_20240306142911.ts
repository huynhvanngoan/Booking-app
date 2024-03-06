import { Browser } from "puppeteer";
import prisma from "./lib/prisma";
import { startLocationScraping } from "./scraping";
export const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { Worker } = await import("bullmq");
        const { connection } = await import("@/lib/redis");
        const puppeteer = await import("puppeteer");

        const SBR_WS_ENDPOINT =
            "wss://brd-customer-hl_a89995fa-zone-booking_app:wnkj53erv86p@brd.superproxy.io:9222";

        new Worker(
            "importQueue",
            async (job) => {
                let browser: undefined | Browser = undefined;
                try {
                    browser = await puppeteer.connect({
                        browserWSEndpoint: SBR_WS_ENDPOINT,
                    });
                    const page = await browser.newPage();
                    console.log("before if ", job.data);

                    if (job.data.jobTyp.e === "location") {
                        console.log("Connected! Navigation to " + job.data.url);
                        await page.goto(job.data.url);
                        console.log("Navigated! Scrapping page content...");
                        const packages = await startLocationScraping(page);
                        console.log({ packages });
                    }
                } catch (error) {
                    console.log(error);
                    await prisma.jobs.update({
                        where: {
                            id: job.data.id,
                        },
                        data: {
                            isComplete: true,
                            status: "failed",
                        },
                    });
                } finally {
                    await browser?.close();
                    console.log("Browser closed successfully.");
                }
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
