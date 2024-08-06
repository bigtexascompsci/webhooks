// Import libraries
import express, { Express, Request, Response } from "express";

// Import helper functions
import configureWebhookResponse from "./webhooks/configure";

// Get environment variables
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

// Set body parsing middleware
const app: Express = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    console.log("Testing webhook!");
    const response = await configureWebhookResponse(req, res);
    res.status(200).json(response);
});

app.listen(PORT, HOST, () => {
    console.log("PORT: " + PORT);;
    console.log("HOST: " + HOST);
    console.log(`Server is listening at http://localhost:${PORT}`);
});