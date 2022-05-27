import { NextFunction, Request, Response, Router } from 'express';
import { getDirectory, getPath, makeDirectory} from '../services/FileService';
import * as Auth from '../middlewares/auth';
export const FileController: Router = Router()

FileController.get('/directory/*', Auth.authorize(['getDirectory']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    let new_path = decodeURIComponent(req.params['0']);
    const files = await getDirectory(new_path)
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

FileController.get('/make_dir', Auth.authorize(['makeDirectory']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    const isCreated = await makeDirectory((req.query.path) as string)
    res.status(200).send({ message: isCreated ? "created" : "directory existed!" })
  } catch (e) {
    next(e)
  }
})