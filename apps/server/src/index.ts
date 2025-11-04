// apps/server/src/index.ts
import dotenv from "dotenv"
dotenv.config()
import express, { Request, Response } from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser";

// import routes
import incidentRoutes from "./routes/incidents"
import authRoutes from "./routes/authRoutes"



// console.log("Loaded OUTLOOK_USER:", process.env.OUTLOOK_USER);
// console.log("Loaded OUTLOOK_PASS:", process.env.OUTLOOK_PASS ? "******" : "MISSING");

const app = express()
const PORT = process.env.PORT || 5200

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // your Next.js dev URL
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + MongoDB!")
})

// Incidents API
app.use("/api/auth", authRoutes)
app.use("/api/incidents", incidentRoutes)

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
