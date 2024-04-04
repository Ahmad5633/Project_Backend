import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    trailer_id: { type: Number },
    thumbnail_id: { type: Number },
  },
  { timestamps: true }
);
export const SeriesModel = mongoose.model("Series", schema);
