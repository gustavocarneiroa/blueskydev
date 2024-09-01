import { BskyAgent, RichText  } from "@atproto/api";
export class BlueskyClient {
    agent: BskyAgent;
    constructor() {
        this.agent = new BskyAgent({
            service: 'https://bsky.social',
        })
    }
    static async create(){
        const client = new BlueskyClient();
        await client.login();

        return client;
    }
    async login() {
        await this.agent.login({ 
            identifier: process.env.BLUESKY_USERNAME,
            password: process.env.BLUESKY_PASSWORD,
        })
    }
    async post(message: string) {
        const rt = new RichText({ text: message })
        await rt.detectFacets(this.agent);
        const postRecord = {
            $type: 'app.bsky.feed.post',
            text: rt.text,
            facets: rt.facets,
            createdAt: new Date().toISOString(),
          }
          
        await this.agent.post(postRecord);
    }
};