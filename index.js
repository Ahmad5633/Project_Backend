import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { unProtectedRouter } from "./routes/index.js";
const app = express();
app.use("/", unProtectedRouter);

app.use(express.json());
app.use(express.urlencoded());

dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
