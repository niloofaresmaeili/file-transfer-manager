import { Application, Router } from 'express'
import { IndexController } from './Controllers/IndexController'
import { AuthController } from './Controllers/AuthController'

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/auth', AuthController]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controller] = route
    app.use(url, controller)
  })
}