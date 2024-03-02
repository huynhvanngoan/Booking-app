

import { Queue } from "bullmq";

import { connection } from "./redis";


export const jobsQueue = new Queue('jobs ')