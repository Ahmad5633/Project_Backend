import express from "express";
import UserController from "../controllers/users.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.get("/:id/streams",UserController.getStreams);
router.get("/:id/streams/:streamId",UserController.getStreamsById);
router.post("/registration", UserController.register);
router.post("/login",UserController.login);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;