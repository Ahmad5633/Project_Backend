import express from "express";
import FileController from "../controllers/file.js";

const router = express.Router();

router.get("/", FileController.getAll);
router.get("/:id", FileController.getById);
router.post("/", FileController.create);
router.patch("/:id", FileController.updateFileById);
router.delete("/:id", FileController.deleteFileById);

export default router;