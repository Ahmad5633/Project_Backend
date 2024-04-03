import express from "express";
import { episodeController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { episodeSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(episodeSchema.add), episodeController.add); // => Create a new episode
route.get("/", episodeController.getAll); // => Get all episodes
route.get("/:id", episodeController.getOne); // => Get an episode by id
route.patch("/:id", validate(episodeSchema.update), episodeController.update); // => Update an episode by id
route.delete("/:id", episodeController.delete); // => Delete an episode by id
route.get("/:id/streams", episodeController.getAllStream); // => Get all streams of an episode by episode id

export default route;
