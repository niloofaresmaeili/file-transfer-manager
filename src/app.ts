import express, { Application } from 'express'
import cors from 'cors'
import { routes } from './routes'
import fileUpload from 'express-fileupload'
// Boot express
export const app: Application = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

// Application routing
routes(app)