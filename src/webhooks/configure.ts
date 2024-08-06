// Import libraries
import { Request, Response } from "express";

// Import components
import { Webhook } from "./response";

export default async function configureWebhookResponse(
    req: Request, 
    res: Response
) {
    // Create instance
    const webhook: Webhook = new Webhook(req, res);

    // Call default export
    const { default: executable } = await webhook.getExecutable()
    executable(webhook);

    // Return response
    return webhook.getResponse();
}