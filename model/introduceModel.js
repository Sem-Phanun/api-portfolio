import mongoose from "mongoose";
const introSchema = new mongoose.Schema(
  {
    welcomeText: {
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
      requied: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("introduce", introSchema)