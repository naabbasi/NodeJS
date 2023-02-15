import {EndpointsConfig} from '@config/endpoints-config.js';
import {APP_ENDPOINTS} from "@endpoints/app-endpoints.js";
import {USER_ENDPOINTS} from "@endpoints/user-endpoints.js";
import {ErrorRequestHandler, NextFunction, Request, Response} from "express";
import createHttpError from "http-errors";
import "reflect-metadata";

const server = EndpointsConfig.server;
server.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

server.use(APP_ENDPOINTS);
server.use(USER_ENDPOINTS);

server.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err,req: Request, res: Response, next: NextFunction) => {
    res.status(err.status);
    res.send({
        status: err.status || 500,
        message: err.message
    });
}

server.use(errorHandler);

server.listen(EndpointsConfig.port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${EndpointsConfig.port}`);
});
