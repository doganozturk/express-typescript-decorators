import { ControllerDecoratorParams } from "../enums";
import { RequestHandler } from "express";

export function Middleware(middlewares: RequestHandler[]): Function {
    return function(target: any, propertyKey: string): void {
        Reflect.defineMetadata(ControllerDecoratorParams.Middleware, middlewares, target, propertyKey);
    }
}

