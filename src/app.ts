import express, { Application } from 'express'
import { routes } from './routes'
import * as Auth from './middlewares/auth';
// Boot express
export const app: Application = express()
app.use(express.json());
app.use(express.urlencoded());

// Application routing
routes(app)