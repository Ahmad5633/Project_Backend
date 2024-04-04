import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    trailer_id: { type: Number ,required : true },
    thumbnail_id: { type: Number ,requied : true },
  },
  { timestamps: true }
);
export const SeriesModel = mongoose.model("Series", schema);
