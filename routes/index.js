import express from "express";
import userRoute from "./user.routes.js";
import genresRoute from "./genres.routes.js";
import seriesRoute from "./series.routes.js";
import seasonRoute from "./season.routes.js";
import episodeRoute from "./episode.routes.js";
import streamsRouter from "./streams.routes.js";
import genSeries from "./gen.series.routes.js";

// const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genres", genresRoute);
unProtectedRouter.use("/series", seriesRoute);
unProtectedRouter.use("/seasons", seasonRoute);
unProtectedRouter.use("/episodes", episodeRoute);
unProtectedRouter.use("/streams", streamsRouter);
unProtectedRouter.use("/genres/series", genSeries);

export { unProtectedRouter };
