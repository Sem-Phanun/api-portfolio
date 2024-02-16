import express from 'express'
import { createSocial, deleteSocial, getSocial, updateSocial } from '../controller/socialController.js'

const router = express.Router()

router.get("/get-social", getSocial)
router.post("/create-social", createSocial)
router.put("/update-social/:_id", updateSocial)
router.delete("/delete-social/:_id", deleteSocial)




export default router