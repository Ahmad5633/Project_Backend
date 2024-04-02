import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import UserRoutes from "./routes/user.js";
import GenreRoutes from "./routes/genre.js";
import SeriesRoutes from "./routes/series.js";
import FileRoutes from "./routes/file.js";
import SeasonRoutes from "./routes/season.js";
import EpisodeRoutes from "./routes/episode.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/users",UserRoutes);
app.use("/genres",GenreRoutes);
app.use("/series",SeriesRoutes);
app.use("/files",FileRoutes);
app.use("/seasons",SeasonRoutes);
app.use("/episodes",EpisodeRoutes);
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

