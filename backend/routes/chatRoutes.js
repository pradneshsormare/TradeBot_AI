// chatRoutes.js — Routes for /api/chat

const { Router } = require("express");
const { handleChat } = require("../controllers/chatController.js");
const { authenticate } = require("../middleware/auth.js");

const router = Router();

router.post("/api/chat", authenticate, handleChat);

module.exports = router;
