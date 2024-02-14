import express from 'express'
import { login, register } from '../controller/authController.js'
import { isAdmin, requireSign } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post("/register",register)
router.post("/login", login)

export default router