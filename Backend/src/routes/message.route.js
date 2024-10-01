import { sendMessage,getMessage } from "../controllers/message.controller.js";
import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();
router.post('/send/:id',authMiddleware,sendMessage);
router.get('/get/:id',authMiddleware,getMessage);

export default router;
