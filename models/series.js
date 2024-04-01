import mongoose from "mongoose";

const schema = mongoose.Schema({
    id: { type: Number, required: true, unique: true, index: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    trailer_id: { type: mongoose.Schema.Types.ObjectId,ref:"File"},
    thumbnail_id: { type: mongoose.Schema.Types.ObjectId,ref:"File"},
},  
{ timestamps: true });

export default mongoose.model("Series", schema);