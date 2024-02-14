import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      requirede: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);




export default mongoose.model("about", aboutSchema)