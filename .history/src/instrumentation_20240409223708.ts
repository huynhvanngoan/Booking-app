import { Browser } from "puppeteer";
import prisma from "./lib/prisma";
import { startLocationScraping, startPackageScraping } from "./scraping";
export const register = async () => {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { Worker } = await import("bullmq");
        const { connection } = await import("@/lib/redis");
        const puppeteer = await import("puppeteer");
        const { importQueue } = await import("@/lib/queue");

        const SBR_WS_ENDPOINT =
            "wss://brd-customer-hl_420a6c24-zone-booking_app:2l6wcbubwopm@brd.superproxy.io:9222";
        new Worker(
            "importQueue",
            async (job) => {
                let browser: undefined | Browser = undefined;
                try {
                    const admin = await prisma.admin.count();

                    if (!admin) {
                        const data = await prisma.admin.create({
                            data: {
                                email: "admin@gmail.com",
                                password: "Admin@123",
                            },
                        });
                    }
                    browser = await puppeteer.connect({
                        browserWSEndpoint: SBR_WS_ENDPOINT,
                    });
                    const page = await browser.newPage();
                    if (job.data.jobType.type === "location") {
                        console.log("Connected! Navigation to " + job.data.url);
                        await page.goto(job.data.url, { timeout: 20000 });

                        console.log("Navigated! Scrapping page content...");
                        const packages = await startLocationScraping(page);

                        await prisma.jobs.update({
                            where: {
                                id: job.data.id,
                            },
                            data: {
                                isComplete: true,
                                status: "complete",
                            },
                        });
                        for (const pkg of packages) {
                            const jobCreated = await prisma.jobs.findFirst({
                                where: {
                                    url: `https://packages.yatra.com/holidays/intl/details.htm?packageId=${pkg.id}`,
                                },
                            });
                            if (!jobCreated) {
                                const job = await prisma.jobs.create({
                                    data: {
                                        url: `https://packages.yatra.com/holidays/intl/details.htm?packageId=${pkg.id}`,
                                        jobType: {
                                            type: "package",
                                        },
                                    },
                                });
                                importQueue.add("package", {
                                    ...job,
                                    packageDetails: pkg,
                                });
                            }
                        }
                    } else if (job.data.jobType.type === "package") {
                        //Already Scrapped Check
                        const alreadyScrapped = await prisma.trips.findUnique({
                            where: {
                                id: job.data.packageDetails.id,
                            },
                        });

                        if (!alreadyScrapped) {
                            console.log(
                                "Connected! Navigating to " + job.data.url
                            );
                            await page.goto(job.data.url, { timeout: 120000 });
                            console.log("Navigated! Scraping page content...");
                            const pkg = await startPackageScraping(
                                page,
                                job.data.packageDetails
                            );
                            
                            await prisma.trips.create({ data: pkg });
                            await prisma.jobs.update({
                                where: {
                                    id: job.data.id,
                                },
                                data: {
                                    isComplete: true,
                                    status: "complete",
                                },
                            });
                        }
                        //Scrape the package

                        //Store the package om trips model

                        //mark the job as complete
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
