import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")
    } catch (error) {
        console.log("error connection", error)
    }
}

export default connectDB