import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from 'cors'



import connectDB from "./config/db.js";
import aboutRoute from './routes/aboutRoute.js'
import projectRoute from './routes/projectRoute.js'
import authRoute from './routes/authRoute.js'
import skillRoute from './routes/skillRoute.js'


const app = express()

/* CONFIGURATION */
dotenv.config()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

connectDB()


app.use("/api", aboutRoute)
app.use("/api", projectRoute)
app.use("/api", authRoute)
app.use("/api", skillRoute)

app.listen(process.env.PORT,()=> {
    console.log("Server listen on port" + process.env.PORT)
})