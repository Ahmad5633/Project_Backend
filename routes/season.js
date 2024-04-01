import express from "express";
import SeasonController from "../controllers/season.js";

const router = express.Router();

router.get("/", SeasonController.getAll);
router.get("/:id", SeasonController.getById);
router.get("/:id/episodes",SeasonController.getEpisodesBySeasonId);
router.post("/", SeasonController.create);
router.patch("/:id", SeasonController.updateSeasonById);
router.delete("/:id", SeasonController.deleteSeasonById);

export default router;