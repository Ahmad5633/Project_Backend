import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    origin_name: { type: String, required: true },
    current_name: { type: String, required: true },
    type: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true }
);
export const FileModel = mongoose.model("File", schema);
