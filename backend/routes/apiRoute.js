import express from 'express'
import { api } from '../controller/apiController.js'

const apiRouter = express.Router()

apiRouter.post("/", api);

export default apiRouter