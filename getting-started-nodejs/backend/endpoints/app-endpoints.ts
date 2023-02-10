import express, { Express, Request, Response } from 'express';
import { AppConfig } from '../config/app-config';
import USER_ENDPOINTS from './user-endpoint';

const app: Express = express();

app.route(`${AppConfig.API_PATH}/app`)
    .get((req: Request, res: Response) => {
        res.send('Application is up runnging');
    });

app.use(`${AppConfig.API_PATH}/users`, USER_ENDPOINTS);

export default app;