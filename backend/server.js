// server.js — Express application entry point
// All business logic lives in services/, controllers/, and routes/

require("dotenv").config({ override: true });
const express = require("express");
const path = require("path");

// Route imports
const authRoutes = require("./routes/authRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const marketRoutes = require("./routes/marketRoutes.js");
const terminalRoutes = require("./routes/terminalRoutes.js");
const historyRoutes = require("./routes/historyRoutes.js");
const { initDatabase } = require("./services/db.js");

const app = express();

// Initialize Database Connection
initDatabase();

// --- Middleware ---
app.use(express.json());

// Serve frontend static files from the frontend/ directory
const frontendPath = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendPath));

// --- Health check ---
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "Backend connected successfully"
  });
});

// --- Register routes ---
app.use(authRoutes);
app.use(chatRoutes);
app.use(marketRoutes);
app.use(terminalRoutes);
app.use(historyRoutes);


// --- Start server (only when run locally, not on Vercel) ---
const PORT = process.env.PORT || 3000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`TradeBot server running at http://localhost:${PORT}`));
}

module.exports = app;
