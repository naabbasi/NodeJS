import {Request, Response, Router} from 'npm:express';

export default abstract class GenericEndpoints {
    protected readonly router: Router;
    protected abstract getClass(): ReturnType<any>;
    protected constructor(router: Router) {
        this.router = router;
    }

    get = () => {
        this.router.get("/", (req: Request, res: Response) => {
            res.status(200).send(`Hello World ${this.getClass().name}`);
        });
    }

    post = () => {
        this.router.post("/", (req: Request, res: Response) => {
            res.status(201).send("Hello World");
        });
    }

    put = () => {
        this.router.put("/", (req: Request, res: Response) => {
            res.status(202).send("Hello World");
        });
    }

    delete = () => {
        this.router.delete("/", (req: Request, res: Response) => {
            res.status(202).send("Hello World");
        });
    }

    getEndpoints() {
        this.get();
        this.post();
        this.put();
        this.delete();
        return this.router;
    }
}