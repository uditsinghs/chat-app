import express from "express";
import {
  login,
  signup,
  getAllusers,
  loginUser,
} from "../controllers/user.controller.js";
const router = express.Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

// Api's
router.post("/signup", signup);
router.post("/login", login);
// router.post("/logout",logoutUser)
router.get("/getusers", authMiddleware, getAllusers);
router.get("/loginuser", authMiddleware, loginUser);
export default router;
