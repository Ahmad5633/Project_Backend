import express from "express";
import GenreController from "../controllers/genre.js";

const router = express.Router();

router.get("/", GenreController.getAll);
router.get("/:id", GenreController.getById);
router.get("/:id/series",GenreController.getSeriesByGenreId);
router.get("/:id/series/:seasons",GenreController.getSeasons);
router.post("/", GenreController.create);
router.patch("/:id", GenreController.updateGenreById);
router.delete("/:id", GenreController.deleteGenreById);

export default router;