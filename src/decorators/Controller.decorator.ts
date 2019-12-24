import { AppRouter } from "../router/AppRouter";
import { HttpMethods, ControllerDecoratorParams } from "../enums";
import { RequestHandler } from "express";

export function Controller(path: string): Function {
    return function(target: any): void {
        const router = AppRouter.router;

        for (const _action in target.prototype) {
            if (target.prototype.hasOwnProperty(_action)) {
                const _path: string = Reflect.getMetadata(ControllerDecoratorParams.Path, target.prototype, _action) || '';
                const method: HttpMethods = Reflect.getMetadata(ControllerDecoratorParams.Method, target.prototype, _action);
                const middlewares: RequestHandler[] = Reflect.getMetadata(ControllerDecoratorParams.Middleware, target.prototype, _action) || [];

                router[method](`${path}${_path}`, middlewares, target.prototype[_action]);
            }
        }
    }
}
