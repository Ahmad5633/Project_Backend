import express from "express";
import { seasonController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { seasonSchema } from "../validations/index.js";

const route = express.Router();

route.post("/", validate(seasonSchema.add), seasonController.add); //  => Create a new season
route.get("/", seasonController.getAll); // => Get all seasons
route.get("/:id", seasonController.getOne); // => Get a season by id
route.patch("/:id", seasonController.update); // => Update a season by id
route.delete("/:id", seasonController.delete); // => Delete a season by id
route.get("/:id/episodes", seasonController.getAllEpisodeById); // => Get all episodes of a season by season id

export default route;
