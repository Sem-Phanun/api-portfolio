import express from 'express'
import { createProject, deleteProject, getAllProject, getSingleProject, updateProject } from '../controller/projectController.js'
import { upload } from '../utils/services.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/project", verifyToken, getAllProject)
router.get("/project/:_id", verifyToken, getSingleProject)
router.post("/project-create", verifyToken, upload.single("image"), createProject)
router.put("/update-project/:_id", verifyToken, upload.single("image"), updateProject)
router.delete("/delete-project/:_id", verifyToken, deleteProject)

export default router