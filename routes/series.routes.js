import express from "express";
import { seriesController } from "../controllers/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { SeriesSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(SeriesSchema.add), seriesController.add); 
route.get("/", seriesController.getAll);
route.get("/:id", seriesController.getOne);
route.patch("/:id", validate(SeriesSchema.update), seriesController.update); 
route.delete("/:id", seriesController.delete); 
route.get("/:id/seasons", seriesController.getSeasonSeries); //  => Get all seasons of a series by series id
route.get("/:id/season/episodes", seriesController.getSeriesSeasonEpi); // => Get all episodes of a series by series id

export default route;


