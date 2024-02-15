import express from 'express'
import { changePassword, login, register, updateUserProfile } from '../controller/authController.js'
import { isAdmin, requireSign } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post("/register",register)
router.post("/login", requireSign,isAdmin, login)
router.post("/forget-password", requireSign,isAdmin, changePassword)
router.put("/update-profile", requireSign, isAdmin, updateUserProfile)

export default router