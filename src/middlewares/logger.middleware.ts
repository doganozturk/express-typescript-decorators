import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction): void {
    console.log('[LOGGING...]');

    next();
}
