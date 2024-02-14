import express from 'express'
import { createProject, getAllProject, getSingleProject, updateProject } from '../controller/projectController.js'
import { upload } from '../utils/services.js'


const router = express.Router()

router.get("/project", getAllProject)
router.get("/project/:_id", getSingleProject)
router.post("/project-create", upload.single("image"), createProject)
router.put("/update-project/:_id", updateProject)

export default router