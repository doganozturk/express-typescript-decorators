import { Request, Response } from "express";
import { Controller, Get, Post, Middleware } from "../decorators";
import { isAdmin, logger } from "../middlewares";

@Controller('/user')
export class UserController {
    @Get()
    getUser(req: Request, res: Response): void {
        res.send(`
            <div>
                <form action="/user" method="post">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name">
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="email">
                    </div>
                    <div>
                        <label for="age">Age:</label>
                        <input type="number" name="age">
                    </div>
                    <div>
                        <label for="address">Address:</label>
                        <input type="text" name="address">
                    </div>
                    <button>SEND</button>
                </form>
            </div>
        `);
    }

    @Post()
    @Middleware([logger, isAdmin])
    postUser(req: Request, res: Response): void {
        const { name, email, age, address } = req.body;

        res.send(`
            <div>
                <h1>USER INFO:</h1>
                <p>
                    Name: ${name}
                </p>
                <p>
                    Email: ${email}
                </p>
                <p>
                    Age: ${age}
                </p>
                <p>
                    Address: ${address}
                </p>
                <p>
                    Is Admin: ${!!res.locals.isAdmin}
                </p>
            </div>
        `);
    }
}
