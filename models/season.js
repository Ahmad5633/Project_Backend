
export default mongoose.model("Season", schema);
import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    series_id: { type: mongoose.Schema.Types.ObjectId, ref: "Series",required:true },
    name: { type: String, required: true },
    description: { type: String,required:true },
  },
  { timestamps: true }
);
export const SeasonModel = mongoose.model("Season", schema);