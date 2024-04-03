import mongoose from "mongoose";

const schema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
},
{ timestamps: true });

export const UserModel = mongoose.model("User", schema);
