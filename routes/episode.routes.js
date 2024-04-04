import express from "express";
import { episodeController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { episodeSchema } from "../validations/index.js";
const route = express.Router();

route.post("/", validate(episodeSchema.add), episodeController.add);
route.get("/", episodeController.getAll); 
route.get("/:id", episodeController.getOne);
route.patch("/:id", validate(episodeSchema.update), episodeController.update); 
route.delete("/:id", episodeController.delete);
route.get("/:id/streams", episodeController.getAllStream); 

export default route;
