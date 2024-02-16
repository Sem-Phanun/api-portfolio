import express from 'express'
import { createHero, deleteHero, getHero, updateHero } from '../controller/heroController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { upload } from '../utils/services.js'


const router = express.Router()



router.get("/get-hero", getHero)
router.post("/create-hero",verifyToken, upload.single("image") , createHero)
router.put("/update-hero/:_id", verifyToken, upload.single("image"), updateHero)
router.delete("/delete-hero/:_id", deleteHero)


export default router