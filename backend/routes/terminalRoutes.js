// terminalRoutes.js — Routes for /api/terminal-analyze

const { Router } = require("express");
const { analyzeTerminal } = require("../controllers/terminalController.js");
const { authenticate } = require("../middleware/auth.js");

const router = Router();

router.post("/api/terminal-analyze", authenticate, analyzeTerminal);

module.exports = router;
