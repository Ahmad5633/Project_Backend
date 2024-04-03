import express from "express";
import { UserValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router.get("/", UserController.getAll); //get all user
router.post("/registration",validate(UserValidationSchema.add),UserController.add); //register a user
router.post("/login",validate(UserValidationSchema.login),UserController.loginUser); //login
router.get("/:id", UserController.getById); //get user by id
router.delete("/:id", UserController.delete); //delete user by id
router.patch("/:id",validate(UserValidationSchema.update),UserController.update); //update user by id
router.get("/:id/streams", UserController.getAllStreamById); //get all streams of a user by using id
router.get("/:id/stream/:streamId", UserController.getStreamByUSId); //get stream of a use by using id and stream id
router.delete("/:id/stream/:streamId", UserController.deleteStreamByUSId); //delete stream of a user by using id and stream id

export default router;
