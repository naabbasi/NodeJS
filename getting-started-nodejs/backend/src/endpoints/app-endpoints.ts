import {NextFunction, Request, Response} from "express";
import {EndpointsConfig} from "@config/endpoints-config.js";

const APP_ENDPOINTS = EndpointsConfig.router;
APP_ENDPOINTS.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now());
    next();
});

APP_ENDPOINTS.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

export {APP_ENDPOINTS};