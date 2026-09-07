// marketRoutes.js — Routes for /api/candles

const { Router } = require("express");
const { getCandles } = require("../controllers/marketController.js");
const { authenticate } = require("../middleware/auth.js");

const router = Router();

router.get("/api/candles", authenticate, getCandles);

module.exports = router;
