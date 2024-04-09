import express from "express";
import sgMail from "@sendgrid/mail";
import { UserModel } from "../models/user.js";
import config from "../config/index.js";
import nodemailer from "nodemailer";
const router = express.Router();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user : config.env.userName ,
    pass : config.env.password ,
  }
});
// sgMail.setApiKey(config.env.api_key);

const otpStorage = new Map(); 

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

router.post("/forget", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const otp = generateOTP();
    otpStorage.set(email, otp);

//     await sgMail.send({
//       to: email,
//       from: "freelancerboy97@gmail.com",
//       subject: "Password Reset OTP",
//       text: `Your OTP for password reset is: ${otp}`,
//     });

//     res.json({ success: true, message: "OTP sent successfully" });
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     res.status(500).json({ success: false, message: "Failed to send OTP" });
//   }
// });
 // Send email using Nodemailer
 await transporter.sendMail({
  from: 'your_email@gmail.com',
  to: email,
  subject: 'Password Reset OTP',
  text: `Your OTP for password reset is: ${otp}`
});

res.json({ success: true, message: "OTP sent successfully" });
} catch (error) {
console.error("Error sending OTP:", error);
res.status(500).json({ success: false, message: "Failed to send OTP" });
}
});

router.post("/reset", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {

    const storedOTP = otpStorage.get(email);
    if (!storedOTP || storedOTP !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    user.password = newPassword;
    await user.save();
    otpStorage.delete(email);

    res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ success: false, message: "Failed to reset password" });
  }
});

export default router;
