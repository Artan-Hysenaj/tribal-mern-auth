import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUser);

export default router;
