import { Webhook } from "./response";

export const tags: { 
    [key: string]: () => Promise<{ default: (webhook: Webhook) => Promise<Webhook> }> 
} = {
    "hello-world": () => import("./tags/hello-world")
};
