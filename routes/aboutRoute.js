import express from 'express'
import { createEducation, createInfo, deleteEduInfo, deleteInfo, getAllInfo, getEduInfo, updateInfo, updateEduInfo } from '../controller/aboutController.js'
import { upload } from '../utils/services.js';
import { requireSign, isAdmin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get("/get-info", requireSign, isAdmin, getAllInfo);
router.post("/create-info", requireSign, isAdmin , upload.single("image"), createInfo)
router.put("/update-info/:_id", requireSign, isAdmin, updateInfo)
router.delete("/delete-info/:_id", requireSign, isAdmin, deleteInfo)


//education router 
router.post("/create-edu-info", requireSign, isAdmin, createEducation)
router.get("/get-edu-info",requireSign, isAdmin, getEduInfo)
router.put("/update-edu-info/:_id", requireSign, isAdmin, updateEduInfo)
router.delete("/delete-edu-info/:_id", requireSign, isAdmin, deleteEduInfo)
export default router