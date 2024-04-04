import express from "express";
import { seasonController } from "../controllers/index.js";
import { validate } from "../middleware/index.js";
import { seasonSchema } from "../validations/index.js";

const route = express.Router();
route.post("/", validate(seasonSchema.add), seasonController.add); 
route.get("/", seasonController.getAll);
route.get("/:id", seasonController.getOne);
route.patch("/:id", seasonController.update); 
route.delete("/:id", seasonController.delete); 
route.get("/:id/episodes", seasonController.getAllEpisodeById);

export default route;
