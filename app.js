require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Database connection
require("./db/conn");

// Routes
const router = require("./routes/router");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "✅ Server is running successfully" });
});

// Port setup (important for Render)
const PORT = process.env.PORT || 8009;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server started on port: ${PORT}`);
});
