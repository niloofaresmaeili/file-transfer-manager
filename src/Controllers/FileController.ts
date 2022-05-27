import { NextFunction, Request, Response, Router } from 'express';
import { getDirectory, getPath, makeDirectory} from '../services/FileService';
import * as Auth from '../middlewares/auth';
import * as fs from 'fs';
import * as path from 'path';
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

FileController.post('/make_dir/', Auth.authorize(['makeDirectory']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    let data = {
      path: String(req.body.path),
      new_directory_name: String(req.body.new_dir_name)
    }
    const isCreated = await makeDirectory(data)
    res.status(200).send({ message: isCreated ? "created!" : "directory existed!" })
  } catch (e) {
    next(e)
  }
})

FileController.get('/download/*', Auth.authorize(['downloadFile']),async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file_path = path.normalize(path.join(process.cwd(), decodeURIComponent(req.params['0'])));
    res.status(200).download(file_path);
  } catch (e) {
    next(e)
  }
})

