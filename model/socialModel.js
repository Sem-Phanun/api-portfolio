import mongoose from "mongoose";

const socialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true})

export default mongoose.model("socials" , socialSchema)