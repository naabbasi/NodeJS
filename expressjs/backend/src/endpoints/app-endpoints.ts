import {Request, Response} from "express";
import {EndpointsConfig} from "@config/endpoints-config.js";
import {Message} from "@entities/message.js";

const APP_ENDPOINTS = EndpointsConfig.router;

APP_ENDPOINTS.get("/api/app", (req: Request, res: Response) => {
    let message = new Message();
    message.message = "Application server has been started";
    res.json(message);
});

export {APP_ENDPOINTS};