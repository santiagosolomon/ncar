// models/Account.ts
import { Schema, model } from "mongoose"

const accountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash this before save
  role: { type: String, enum: ["admin", "user"], default: "user" },
  organization: { type: String, enum: ["PTC", "GICC", "ALL"], required: true }
}, { timestamps: true })

export const Account = model("Account", accountSchema)
