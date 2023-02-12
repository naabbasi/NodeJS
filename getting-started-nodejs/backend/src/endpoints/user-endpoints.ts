import {Request, Response} from "express";
import {EndpointsConfig} from "@config/endpoints-config.js";
import {User} from "@entities/user.js";

const USER_ENDPOINTS = EndpointsConfig.router;

USER_ENDPOINTS.get("/api/user", (req: Request, res: Response) => {
    let user = new User();
    user.username = "Noman Ali";
    user.password = "xxx";
    res.send(user);
});

USER_ENDPOINTS.post('/api/user', (req: Request, res: Response) => {
    const user = req.body;

    // Output the user to the console for debugging
    console.log(user);
    //books.push(user);

    res.send('User is added to the database');
});

USER_ENDPOINTS.put('/api/user', (req: Request, res: Response) => {
    const user = req.body;

    // Output the user to the console for debugging
    console.log(user);
    //books.push(user);

    res.send('User is added to the database');
});

USER_ENDPOINTS.get('/users/:userId', (req: Request, res: Response) => {
    return res.send(req.params["userId"]);
});

USER_ENDPOINTS.delete('/users/:userId', (req: Request, res: Response) => {
    return res.send(req.params["userId"]);
});

export {USER_ENDPOINTS};