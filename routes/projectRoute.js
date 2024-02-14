import express from 'express'
import { createProject, deleteProject, getAllProject, getSingleProject, updateProject } from '../controller/projectController.js'
import { upload } from '../utils/services.js'
import { requireSign, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/project", requireSign, isAdmin, getAllProject)
router.get("/project/:_id", requireSign, isAdmin, getSingleProject)
router.post("/project-create", requireSign, isAdmin, upload.single("image"), createProject)
router.put("/update-project/:_id", requireSign, isAdmin, updateProject)
router.delete("/delete-project/:_id", requireSign, isAdmin, deleteProject)

export default router