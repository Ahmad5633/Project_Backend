import express from "express";
import { genresSeriesController } from "../controllers/genSeries.js";
const route = express.Router();

route.get("/", genresSeriesController.getAll); //  ==> Get all genres
route.post("/", genresSeriesController.add); //  ==> Create a new genre
route.get("/:id", genresSeriesController.getOne); //  ==> Get a genre by id
route.delete("/:id", genresSeriesController.delete); //  ==> Delete a genre by id
route.patch("/:id",genresSeriesController.update);
export default route;
