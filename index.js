
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import googleAuth from "./routes/googleAuth.routes.js";
import forgetPassword from "./routes/forgetPassword.js";

import UserRoutes from "./routes/user.routes.js";
import GenreRoutes from "./routes/genres.routes.js";
import SeriesRoutes from "./routes/series.routes.js";
import SeasonRoutes from "./routes/season.routes.js";
import EpisodeRoutes from "./routes/episode.routes.js";
import StreamRoutes from "./routes/streams.routes.js";
import FileRoutes from "./routes/file.routes.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/users",UserRoutes);
app.use("/genres",GenreRoutes);
app.use("/series",SeriesRoutes);
app.use("/seasons",SeasonRoutes);
app.use("/episodes",EpisodeRoutes);
app.use("/streams",StreamRoutes);
app.use("/files",FileRoutes);


app.use("/password",forgetPassword);
app.use("/googleAuth",googleAuth);
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const port = process.env.PORT || 3000; 
const port = 2024 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
