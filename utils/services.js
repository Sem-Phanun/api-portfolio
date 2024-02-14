import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'


const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.use("/upload", express.static(path.join(__dirname, "public/upload")))

const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "public/upload")
    },
    filename: function(req, file, cb){
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()* 1E9)
      req.body.image = uniqueSuffix
      cb(null, "img-"+ uniqueSuffix + file.originalname)  
    }
  })
  
  export const upload = multer({ storage })