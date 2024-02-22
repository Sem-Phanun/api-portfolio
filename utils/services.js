import express from 'express'
import multer from 'multer'
import path from 'path'



const app = express()


const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "public/upload")
    },
    filename: function(req, file, cb){
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()* 1E9) + path.extname(file.originalname) 
      req.body.image = uniqueSuffix
      cb(null, uniqueSuffix)  
    }
  })
  
export const upload = multer({ storage })