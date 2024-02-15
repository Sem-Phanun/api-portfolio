import express from 'express'
import { createInfo, getAllInfo } from '../controller/aboutController.js'
import { upload } from '../utils/services.js';
const router = express.Router()

router.get("/get-info", getAllInfo);
router.post("/create-info", upload.single("image"), createInfo)


export default router