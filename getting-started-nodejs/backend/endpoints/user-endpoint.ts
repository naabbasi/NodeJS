import express, { Express, NextFunction, Request, Response } from 'express';
import { AppConfig } from '../config/app-config';

const USER_ENDPOINTS = express.Router()

USER_ENDPOINTS.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Time: `, Date.now());
    next()
})

USER_ENDPOINTS.get('/', (req: Request, res: Response) => {
    res.send('All Users');
})

USER_ENDPOINTS.post('/', (req: Request, res: Response) => {
    res.send('Save User');
})

USER_ENDPOINTS.put('/', (req: Request, res: Response) => {
    res.send('Update User');
})

USER_ENDPOINTS.delete('/', (req: Request, res: Response) => {
    res.send('Delete User');
});

export default USER_ENDPOINTS;