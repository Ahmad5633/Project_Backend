import express from "express";
import { genreController } from "../controllers/index.js";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";

const route = express.Router();

route.get("/", genreController.getAll); 
route.post("/", validate(GenreValidationSchema.add), genreController.add); 
route.get("/:id", genreController.getOne);
route.patch("/:id",validate(GenreValidationSchema.add),genreController.update);
route.delete("/:id", genreController.delete);
export default route;

