import express from "express";
import { genresSeriesController } from "../controllers/genSeries.js";
const route = express.Router();

route.get("/", genresSeriesController.getAll);
route.post("/", genresSeriesController.add); 
route.get("/:id", genresSeriesController.getOne); 
route.delete("/:id", genresSeriesController.delete);
route.patch("/:id",genresSeriesController.update);
export default route;
