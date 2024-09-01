import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import { BlueskyClient } from './client/bluesky.client';
import { generateProblematicMessage } from './message/message.builder';

dotenv.config();

async function main() { 

    // 
    const message = generateProblematicMessage();
    console.log("*****************")
    console.log(message)
    const client = await BlueskyClient.create();
    await client.post(message);
    console.log("*****************")
}
main();

const scheduleExpressionMinute = '*/30 * * * *';

const job = new CronJob(scheduleExpressionMinute, main);

job.start();
