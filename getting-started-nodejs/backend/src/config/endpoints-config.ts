import express, {Express} from 'express';
import dotenv from 'dotenv';

dotenv.config();

class EndpointsConfig {
    private static readonly _server: Express = express();
    private static readonly _router = express.Router()
    private static readonly _port = process.env['PORT'] || 8000;
    private static readonly _routes = new Array<express.Router>();

    static get server(): express.Express {
        return this._server;
    }

    static get router(): express.Router {
        return this._router;
    }

    static get port(): string {
        return <string>this._port;
    }

    static registerEndpoints(route: express.Router) {
        console.log("adding refresh");
        this._routes.push(route);
        this.refreshRoutes();
    }

    private static refreshRoutes(){
        console.log("calling refresh");
        for(let route of EndpointsConfig._routes){
            console.log(`Setting route: ${route}`);
            EndpointsConfig._router.use(route);
        }
    }
}

export {EndpointsConfig}
//exports.EndpointsConfig = EndpointsConfig;
//module.exports = EndpointsConfig;