import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userroutes from "./routes/users.js";
import genreroutes from "./routes/genre.js";
import seriesroutes from "./routes/series.js";
import fileroutes from "./routes/file.js";
import seasonroutes from "./routes/season.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/users",userroutes);
app.use("/genres",genreroutes);
app.use("/series",seriesroutes);
app.use("/files",fileroutes);
app.use("/seasons",seasonroutes);
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

