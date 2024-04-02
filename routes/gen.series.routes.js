import express from "express";
import { genresSeriesController } from "../controllers/genSeries.js";
const route = express.Router();

// route.get("/", genreController.getAll); //  ==> Get all genres
route.post("/", genresSeriesController.add); //  ==> Create a new genre
// route.get("/:id", genreController.getOne); //  ==> Get a genre by id
// route.delete("/:id", genreController.delete); //  ==> Delete a genre by id

export default route;