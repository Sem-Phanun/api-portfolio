import express from 'express'
import { createExperience, createSkill, deleteExperience, deleteSkill, getExperience, getSkillList, updateExperience, updateSkill } from '../controller/skillController.js'
import { verifyToken} from '../middleware/authMiddleware.js'
import { upload } from '../utils/services.js'
const router = express.Router()



router.get("/skill-list", verifyToken, getSkillList)
router.post("/create-skill", verifyToken, upload.single("image"), createSkill)
router.put("/update-skill/:_id",verifyToken, upload.single("image"), updateSkill)
router.delete("/delete-skill/:_id", verifyToken, deleteSkill)

/* experience router */

router.get("/experience", verifyToken, getExperience)
router.post("/create-experience", verifyToken, createExperience)
router.put("/update-experience/:_id", verifyToken, updateExperience)
router.delete("/delete-experice/:_id", verifyToken, deleteExperience)





export default router