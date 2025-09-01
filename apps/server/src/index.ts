import express, { Request, Response } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

// import routes
import incidentRoutes from "./routes/incidents"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors()) // allow frontend requests
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err))

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + MongoDB!")
})

// ✅ Incidents API
app.use("/api/incidents", incidentRoutes)

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
