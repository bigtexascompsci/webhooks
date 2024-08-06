import { Webhook } from "../response";

export default async (webhook: Webhook): Promise<Webhook> => {
    webhook.pushText("Hello, World!");
    return webhook;
}