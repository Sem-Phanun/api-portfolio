import express from 'express'
import { createEducation, createInfo, deleteEduInfo, deleteInfo, getAllInfo, getEduInfo, updateInfo, updateEduInfo } from '../controller/aboutController.js'
import { upload } from '../utils/services.js';
import { verifyToken} from '../middleware/authMiddleware.js'
const router = express.Router()


//about router
router.get("/get-info", verifyToken, getAllInfo);
router.post("/create-info", verifyToken , upload.single("image"), createInfo)
router.put("/update-info/:_id", verifyToken, upload.single("image"), updateInfo)
router.delete("/delete-info/:_id", verifyToken, deleteInfo)


//education router 
router.post("/create-edu-info", verifyToken, createEducation)
router.get("/get-edu-info", verifyToken, getEduInfo)
router.put("/update-edu-info/:_id", verifyToken, updateEduInfo)
router.delete("/delete-edu-info/:_id", verifyToken, deleteEduInfo)

export default router