import {Request, Response, Router} from 'npm:express';
import GenericEndpoints from './GenericEndpoints.ts';

export class AppEndpoints extends GenericEndpoints {
    protected readonly router: Router;

    constructor(router: Router) {
        super(router);
        this.router = router;
    }


    protected getClass(): ReturnType<any> {
        return AppEndpoints;
    }
}