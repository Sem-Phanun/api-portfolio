import mongoose from "mongoose";
const heroSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requied: true,
    },
    name: {
      type: String,
      requied: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: ""
    },
  },
  { timestamps: true }
);

export default mongoose.model("hero", heroSchema)