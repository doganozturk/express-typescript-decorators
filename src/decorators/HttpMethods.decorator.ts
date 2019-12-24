import { HttpMethods, ControllerDecoratorParams } from "../enums";

function createRouteMethod(method: HttpMethods) {
    return function(path?: string): Function {
        return function(target: any, propertyKey: string): void {
            Reflect.defineMetadata(ControllerDecoratorParams.Path, path, target, propertyKey);
            Reflect.defineMetadata(ControllerDecoratorParams.Method, method, target, propertyKey);
        }
    }
}

export const Get = createRouteMethod(HttpMethods.Get);
export const Post = createRouteMethod(HttpMethods.Post);
export const Put = createRouteMethod(HttpMethods.Put);
export const Patch = createRouteMethod(HttpMethods.Patch);
export const Delete = createRouteMethod(HttpMethods.Delete);
