import express from "express";
import googleAuth from "./googleAuth.routes.js";
import forgetPassword from "./forgetPassword.js";
import UserRoutes from "./user.routes.js";
import GenreRoutes from "./genres.routes.js";
import SeriesRoutes from "./series.routes.js";
import SeasonRoutes from "./season.routes.js";
import EpisodeRoutes from "./episode.routes.js";
import StreamRoutes from "./streams.routes.js";
import FileRoutes from "./file.routes.js";

const unProtectedRouter = express.Router();
unProtectedRouter.use(express.json());
unProtectedRouter.use(express.urlencoded());
unProtectedRouter.use("/users",UserRoutes);
unProtectedRouter.use("/genres",GenreRoutes);
unProtectedRouter.use("/series",SeriesRoutes);
unProtectedRouter.use("/seasons",SeasonRoutes);
unProtectedRouter.use("/episodes",EpisodeRoutes);
unProtectedRouter.use("/streams",StreamRoutes);
unProtectedRouter.use("/files",FileRoutes);
unProtectedRouter.use("/password",forgetPassword);
unProtectedRouter.use("/googleAuth",googleAuth);


export { unProtectedRouter };