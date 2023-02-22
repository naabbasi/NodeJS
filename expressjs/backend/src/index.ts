import { EndpointsConfig } from "@config/endpoints-config.js";
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import "reflect-metadata";
import { AppEndpoints } from "@endpoints/app-endpoints.js";
import { UserEndpoints } from "@endpoints/user-endpoints.js";
import { DataGeneratorEndpoints } from "@endpoints/data-generator-endpoints.js";

const server = EndpointsConfig.server;
server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const appRouters = new AppEndpoints(express.Router()).getEndpoints();
const userRouters = new UserEndpoints(express.Router()).getEndpoints();
const dataGeneratorRoutes = new DataGeneratorEndpoints(express.Router()).getEndpoints();

server.use("/api/apps", appRouters);
server.use("/api/users", userRouters);
server.use("/api/generate", dataGeneratorRoutes);

server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status);
  res.send({
    status: err.status || 500,
    message: err.message
  });
};

server.use(errorHandler);

server.listen(EndpointsConfig.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${EndpointsConfig.port}`);
});
