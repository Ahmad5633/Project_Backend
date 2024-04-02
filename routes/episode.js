import express from "express";
import EpisodeController from "../controllers/episode.js";

const router = express.Router();

router.get("/", EpisodeController.getAll);
router.get("/:id", EpisodeController.getById);
router.get("/:id/strams",EpisodeController.getAllStreams)
router.post("/", EpisodeController.create);
router.patch("/:id", EpisodeController.updateEpisodeById);
router.delete("/:id", EpisodeController.deleteEpisodeById);

export default router;