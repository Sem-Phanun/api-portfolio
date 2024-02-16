import express from 'express'
import { createHero, deleteHero, getHero, updateHero } from '../controller/heroController.js'


const router = express.Router()



router.get("/get-hero", getHero)
router.post("/create-hero", createHero)
router.put("/update-hero/:_id", updateHero)
router.delete("/delete-hero/:_id", deleteHero)


export default router