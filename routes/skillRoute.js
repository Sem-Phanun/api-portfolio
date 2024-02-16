import express from 'express'
import { createExperience, createSkill, deleteExperience, deleteSkill, getExperience, getSkillList, updateExperience, updateSkill } from '../controller/skillController.js'
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()



router.get("/skill-list", verifyToken, getSkillList)
router.post("/create-skill", verifyToken, createSkill)
router.put("/update-skill/:_id",verifyToken, updateSkill)
router.delete("/delete-skill/:_id", verifyToken, deleteSkill)


/* experience router */

router.get("/experience", getExperience)
router.post("/create-experience", createExperience)
router.put("/update-experience/:_id", verifyToken, isAdmin, updateExperience)
router.delete("/delete-experice/:_id", verifyToken, isAdmin, deleteExperience)





export default router