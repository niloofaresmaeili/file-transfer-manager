import { NextFunction, Request, Response, Router } from "express";
import { generateToken } from "../utils/jwt"
export const AuthController: Router = Router();

const users: any = {
  admin: {
    password: "password"
  }
};
AuthController.post( "/login",async (req: Request, res: Response, next: NextFunction) => {
    try {
        users.hasOwnProperty(req.body.username)? 
        ((users[req.body.username].password === req.body.password) ? 
            res.status(200).send({ token: generateToken(), message: "you are admin" }):res.status(429).send({message: "password is wrong!"})
        ):res.status(429).send({message: "username not found!"})
    } catch (e) {
      next(e);
    }
  }
);