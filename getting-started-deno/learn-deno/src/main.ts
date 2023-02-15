//@deno-types='npm:@types/express'
//@deno-types='npm:@types/node'
import express, {Express} from 'npm:express';
import {AppEndpoints} from "./endpoints/AppEndpoints.ts";
import {UserEndpoints} from "./endpoints/UserEndpoints.ts";

const expressServer: Express = express();

const appRouters = new AppEndpoints(express.Router()).getEndpoints();
const userRouters = new UserEndpoints(express.Router()).getEndpoints();
expressServer.use("/api/apps", appRouters)
expressServer.use("/api/users", userRouters)
expressServer.listen(3000);
