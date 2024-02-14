import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("education", educationSchema)