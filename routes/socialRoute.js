import express from 'express'
import { createSocial, deleteSocial, getSocial, updateSocial } from '../controller/socialController.js'
import { verifyToken } from '../middleware/authMiddleware.js'
import { upload } from '../utils/services.js'

const router = express.Router()

router.get("/get-social", verifyToken, getSocial)
router.post("/create-social", verifyToken, upload.single("image"), createSocial)
router.put("/update-social/:_id", verifyToken, upload.single("image"), updateSocial)
router.delete("/delete-social/:_id", verifyToken, deleteSocial)


export default router