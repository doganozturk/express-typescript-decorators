import { Router } from 'express';

export class AppRouter {
    private static instance = Router();

    static get router(): Router {
        return AppRouter.instance;
    }
}
