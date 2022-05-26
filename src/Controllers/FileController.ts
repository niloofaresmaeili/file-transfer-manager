import { NextFunction, Request, Response, Router } from 'express';
import { getDirectory, getPath } from '../services/FileService';
import * as Auth from '../middlewares/auth';
export const FileController: Router = Router()

FileController.get('/directory', Auth.authorize(['getDirectory']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = await getDirectory()
    res.status(200).send({ data: files })
  } catch (e) {
    next(e)
  }
})

FileController.get('/get_path', Auth.authorize(['getPath']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    const path = await getPath((req.query.path) as string)
    res.status(200).send({ data: path })
  } catch (e) {
    next(e)
  }
})