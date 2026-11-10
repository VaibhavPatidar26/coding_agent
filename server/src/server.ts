import "dotenv/config";
import dns from "node:dns";

// Force IPv4-first resolution to prevent undici IPv6 connect timeouts
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Vite client dev port
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
