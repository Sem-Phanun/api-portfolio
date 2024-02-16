import express from 'express'
import { changePassword, getUser, login, register, updateUserProfile } from '../controller/authController.js'
import { isAdmin, verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/forget-password", verifyToken, changePassword)
router.put("/update-profile", verifyToken, updateUserProfile)
router.get("/get-user/:_id", getUser)
export default router