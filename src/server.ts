import 'reflect-metadata';
import express from "express";
import bodyParser from 'body-parser';
import { AppRouter } from './router/AppRouter';

import "./controllers/User.controller";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.router);

app.listen(port, (): void => {
    console.log(`Server started on port ${port}`);
});
