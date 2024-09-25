import express from "express";
import { login, signup ,logoutUser} from "../controllers/user.controller.js";
const router = express.Router();

// Api's
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",logoutUser)
export default router;
