import mongoose from "mongoose";
const introSchema = new mongoose.Schema(
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

export default mongoose.model("introduce", introSchema)