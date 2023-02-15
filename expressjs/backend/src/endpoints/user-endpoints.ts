import {Request, Response} from "express";
import {EndpointsConfig} from "@config/endpoints-config.js";
import {User} from "@entities/user.js";
import {AppDataSource} from "@data-source/data-source.js";

const USER_ENDPOINTS = EndpointsConfig.router;

USER_ENDPOINTS.get("/api/user", (req: Request, res: Response) => {
    /*let user = new User();
    user.username = "Noman Ali";
    user.password = "xxx";
    AppDataSource.manager.save(user).then(r => console.log("User saved Successfully..."));*/
    AppDataSource.manager.find(User).then(r => {
        res.status(200).send(r);
    });
});

USER_ENDPOINTS.post('/api/user', (req: Request, res: Response) => {
    let user = new User(req.body);

    if(user instanceof User){
        console.log("User from Request: ", user);
        AppDataSource.manager.save(user).then(r => console.log("User saved Successfully..."));
        res.send('User is added to the database')
    } else {
        res.status(400).send('Invalid User Object')
    }
});

USER_ENDPOINTS.put('/api/user', (req: Request, res: Response) => {
    const user = req.body;

    // Output the user to the console for debugging
    console.log(user);
    res.send('User is added to the database');
});

USER_ENDPOINTS.get('/users/:userId', (req: Request, res: Response) => {
    return res.send(req.params["userId"]);
});

USER_ENDPOINTS.delete('/users/:userId', (req: Request, res: Response) => {
    return res.send(req.params["userId"]);
});

export {USER_ENDPOINTS};