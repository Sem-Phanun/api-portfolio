import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true})


export default mongoose.model("skills", skillSchema)