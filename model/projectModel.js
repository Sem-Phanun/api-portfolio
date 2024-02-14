import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    links: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        default: []
    }
}, { timestamps: true})

export default mongoose.model("projects", projectSchema)