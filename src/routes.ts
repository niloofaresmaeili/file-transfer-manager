import { Application, Router } from 'express'
import { IndexController } from './Controllers/IndexController'
import { AuthController } from './Controllers/AuthController'
import { FileController } from './Controllers/FileController'

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/auth', AuthController],
  ['/files', FileController]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route
    app.use(url, controller)
  })
}