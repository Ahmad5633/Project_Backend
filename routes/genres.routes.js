import express from "express";
import { genreController } from "../controllers/index.js";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";

const route = express.Router();

route.get("/", genreController.getAll); //  ==> Get all genres
route.post("/", validate(GenreValidationSchema.add), genreController.add); //  ==> Create a new genre
route.get("/:id", genreController.getOne); //  ==> Get a genre by id
route.patch("/:id",validate(GenreValidationSchema.add),genreController.update); //  ==> Update a genre by id
route.delete("/:id", genreController.delete); //  ==> Delete a genre by id
export default route;

