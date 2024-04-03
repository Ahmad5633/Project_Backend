import express from "express";
import { streamController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { StreamSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(StreamSchema.add), streamController.add); // => Create a new stream
route.get("/", streamController.getAll); // => Get all streams
route.get("/:id", streamController.getOne); // => Get a stream by id
route.patch("/:id", streamController.update); // => Update a stream by id
route.delete("/:id", streamController.delete); // => Delete a stream by
route.get("/:id/episodes", streamController.streamEpisode); // => Get the episode ofd a stream by stream id
route.get("/:id/user", streamController.streamUser); // => Get the user of a stream by stream id
route.get("/:id/episode/season", streamController.getSES); //  => Get the season of an episode of a stream by stream id
route.get("/:id/episode/season/series", streamController.getSESS); // => Get the series of a season of an episode of a stream by stream id
route.get("/:id/episode/season/series/genre", streamController.getSESGG); //  => Get the genre of a series of a season of an episode of a stream by stream id

export default route;
