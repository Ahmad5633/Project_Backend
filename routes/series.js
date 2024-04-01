import express from "express";
import SeriesController from "../controllers/series.js";

const router = express.Router();

router.get("/", SeriesController.getAll);
router.get("/:id", SeriesController.getById);
router.get("/:id/seasons",SeriesController.getSeasonsBySeriesId);
router.get("/:id/seasons/episodes",SeriesController.getEpisodesBySeriesId);
router.post("/", SeriesController.create);
router.patch("/:id", SeriesController.updateSeriesById);
router.delete("/:id", SeriesController.deleteSeriesById);

export default router;