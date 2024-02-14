import express from 'express'
import { getAllProject } from '../controller/projectController.js'


const router = express.Router()

router.get("/project", getAllProject)


export default router