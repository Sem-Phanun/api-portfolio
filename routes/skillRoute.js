import express from 'express'
import { createExperience, createSkill, deleteExperience, deleteSkill, getExperience, getSkillList, updateExperience, updateSkill } from '../controller/skillController.js'
import { requireSign, isAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()



router.get("/skill-list", requireSign, getSkillList)
router.post("/create-skill", requireSign, isAdmin, createSkill)
router.put("/update-skill/:_id",requireSign, isAdmin, updateSkill)
router.delete("/delete-skill/:_id", requireSign, isAdmin, deleteSkill)


/* experience router */

router.get("/experience", getExperience)
router.post("/create-experience", requireSign, isAdmin, createExperience)
router.put("/update-experience/:_id", requireSign, isAdmin, updateExperience)
router.delete("/delete-experice/:_id", requireSign, isAdmin, deleteExperience)





export default router