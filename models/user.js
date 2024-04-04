import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    first_name: { type: String, required: true, maxlength: 50 },
    last_name: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, maxlength: 50 },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
export const UserModel = mongoose.model("User", schema);
