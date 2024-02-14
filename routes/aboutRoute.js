import express from 'express'
import { getAllData } from '../controller/aboutController.js'
const router = express.Router()

router.get("/", getAllData);


export default router