// apps/server/src/scripts/seed-admins.ts
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import { Account } from "../models/Account"

// Load env vars
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

async function seedAdmins() {
  try {
    const uri = process.env.MONGODB_URI
    console.log('Environment loaded:', { 
      hasUri: !!process.env.MONGODB_URI,
      envKeys: Object.keys(process.env).filter(key => key.includes('MONGO'))
    })
    if (!uri) throw new Error("❌ MONGODB_URI not set in .env")

    await mongoose.connect(uri)
    console.log("✅ Connected to MongoDB")

    const hashed = await bcrypt.hash("password123", 10) // TODO: replace later

    await Account.updateOne(
      { email: "peter.dein@petbowe.com.ph" },
      {
        email: "peter.dein@petbowe.com.ph",
        password: hashed,
        role: "admin",
        organization: "ALL",
      },
      { upsert: true }
    )

    await Account.updateOne(
      { email: "daniel.cortez@petbowe.com.ph" },
      {
        email: "daniel.cortez@petbowe.com.ph",
        password: hashed,
        role: "admin",
        organization: "ALL",
      },
      { upsert: true }
    )

    console.log("✅ Default admins seeded successfully")
  } catch (err) {
    console.error("❌ Error seeding admins:", err)
  } finally {
    await mongoose.disconnect()
    process.exit(0)
  }
}

seedAdmins()
