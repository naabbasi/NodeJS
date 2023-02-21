import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

class EndpointsConfig {
  private static readonly _server: Express = express();
  private static readonly _router = express.Router();
  private static readonly _port = process?.env["PORT"] || 8000;
  private static readonly _routes = new Array<express.Router>();

  static get server(): express.Express {
    this._server.set("json spaces", 2);
    this._server.use(bodyParser.urlencoded({ extended: false }));
    this._server.use(bodyParser.json());

    let hosts: string[] = ['http://localhost:5173', 'http://localhost:3000'];
    let methods: string[] = ['GET','POST','DELETE','UPDATE','PUT','PATCH', 'OPTIONS'];
    /*let headers: string[] = ["Accept", "Origin", "X-Requested-With", "Content-Type", "Accept-Language", "X-Auth-Token", "Authorization", "X-Forwarded-For"];*/

    this._server.use(cors({
      origin: hosts,
      preflightContinue: true,
      optionsSuccessStatus: 200,
      credentials:true,
      methods: methods,
      /*allowedHeaders: headers,*/
    }));
    return this._server;
  }

  static get router(): express.Router {
    return this._router;
  }

  static get port(): string {
    return <string>this._port;
  }

  static registerEndpoints(route: express.Router) {
    this._routes.push(route);
    this.refreshRoutes();
  }

  private static refreshRoutes() {
    for (let route of EndpointsConfig._routes) {
      EndpointsConfig._router.use(route);
    }
  }
}

export { EndpointsConfig };
//exports.EndpointsConfig = EndpointsConfig;
//module.exports = EndpointsConfig;