import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";



import connectDB from "./config/db.js";
import aboutRoute from './routes/aboutRoute.js'

const app = express()





/* CONFIGURATION */
dotenv.config()
app.use(bodyParser.json())
app.use(express.json())

connectDB()


app.use("/api", aboutRoute)



app.listen(process.env.PORT,()=> {
    console.log("Server listen on port" + process.env.PORT)
})