import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);
export const GenreModel = mongoose.model("Genre", schema);
