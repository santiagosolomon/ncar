// models/Incident.ts

import { Schema, model } from "mongoose"

const incidentSchema = new Schema({
  type: String,
  deviation: String,
  description: String,
  sku: String,
  details: String,
  outOfTotal: String,
  poNo: String,
  lotNo: String,
  containerNo: String,
  billOfLandingNo: String,
}, { timestamps: true })

export const Incident = model("Incident", incidentSchema)
