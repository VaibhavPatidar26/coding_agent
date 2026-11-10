import { Router } from "express";
import { handleChatPrompt } from "../controllers/chatController.js";

const router = Router();

router.post("/", handleChatPrompt);

export default router;
