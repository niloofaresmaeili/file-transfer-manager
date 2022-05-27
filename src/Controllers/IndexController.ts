import express from 'express'
import path from 'path'
export const IndexController = express.Router()

IndexController.use('/', express.static(path.join(__dirname, '../../ui')))


IndexController.get('/', async (req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '../../ui/index.html'))

  } catch (e) {
    next(e)
  }
})