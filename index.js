import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
// app.use("/", routes);
// app.use("/user",userroutes);
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

