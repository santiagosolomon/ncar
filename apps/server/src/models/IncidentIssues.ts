// models/IncidentIssues.ts
import { Schema } from "mongoose"

export const incidentIssuesSchema = new Schema({
  grossWeight: { type: String },
  netWeight: { type: String },
  tareWeight: { type: String },
}, { timestamps: true, strict: true, id: false })

export const incidentIssuesSelectionSchema = new Schema({
  quantityIssue: { type: Boolean, default: false },
  qualityIssue: { type: Boolean, default: false },
  procedureDocumentation: { type: Boolean, default: false },
  packagingProblem: { type: Boolean, default: false },
  others: { type: String },
}, { timestamps: true, strict: true, id: false })
