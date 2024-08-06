// Import libraries
import { Request, Response } from "express";

// Import helper functions
import { tags } from "./_tags";

interface Base {
    fulfillmentResponse: {
        messages: any[];
        mergeBehavior: string;
    };
    pageInfo: {};
    sessionInfo: {};
    payload: {};
}

export class Webhook {
    base: Base;
    req: Request;
    res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        this.base = {
            fulfillmentResponse: {
                messages: [],
                mergeBehavior: "MERGE_BEHAVIOR_UNSPECIFIED"
            },
            pageInfo: {},
            sessionInfo: {},
            payload: {}
        };
    }

    getExecutable(): Promise<{ 
        default: (webhook: Webhook) => Promise<Webhook> 
    }> {
        // this.req.body.fulfillmentInfo.tag
        return tags["hello-world"]().then((module) => ({
            default: module.default
        }));
    };    

    getResponse(): Base {
        return this.base;
    }

    pushText(text: string): void {
        const customText = {
            text: {
                text: [
                    text
                ]
            }
        };

        this.base.fulfillmentResponse.messages.push(text);
    }
}