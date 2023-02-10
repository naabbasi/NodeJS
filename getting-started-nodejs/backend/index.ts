import { Request, Response } from 'express';
import dotenv from 'dotenv';
import app from './endpoints/app-endpoints';
import USER_ENDPOINTS from './endpoints/user-endpoint';
import { AppConfig } from './config/app-config';

dotenv.config();

app.listen(AppConfig.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${AppConfig.PORT}`);
});