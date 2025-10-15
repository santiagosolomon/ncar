// models/Incident.ts

import { Schema, model } from "mongoose";
import { incidentDetailsSchema } from "./IncidentDetails";
import { incidentIssuesSchema } from "./IncidentIssues";
import { incidentIssuesSelectionSchema } from "./IncidentIssues";
import { incidentActionsSchema } from "./IncidentActions";
import { incidentEvaluationSchema } from "./IncidentEvaluation";

// ============================
// Counter for auto-incrementing refNo
// ============================
const counterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = model("Counter", counterSchema);

// Initialize counter if it doesn't exist
async function initializeCounter() {
  try {
    const existingCounter = await Counter.findById("incidentCounter");
    if (!existingCounter) {
      await Counter.create({ _id: "incidentCounter", seq: 0 });
      console.log("✅ Counter initialized successfully");
    } else {
      console.log("ℹ️ Counter already exists, using existing counter");
    }
  } catch (error) {
    console.error("❌ Error initializing counter:", error);
  }
}
initializeCounter();

// ============================
// Incident Schema
// ============================
const incidentSchema = new Schema(
  {
    refNo: { type: Number, unique: true },
    dateReported: { type: Date },
    description: { type: String },
    reportingDepartment: { type: String },
    reportingEmployee: { type: String },
    natureOfException: { type: String },
    auditFinding: { type: String },
    concernType: { type: String, enum: ["customer", "supplier", "department"] },
    concernName: { type: String },
    customerDepartment: String,
    moduleOfPurchase: { type: String, enum: ["Imported", "Local"] },
    typeOfDelivery: { type: String, enum: ["indent", "exstock", "forward"] },
    status: { type: String },
    classification: { type: String },
    date: { type: Date },
    incidentDetails: [incidentDetailsSchema],
    incidentIssues: [incidentIssuesSchema],
    incidentIssuesSelection: incidentIssuesSelectionSchema,
    incidentActions: [incidentActionsSchema],
    incidentEvaluation: [incidentEvaluationSchema],

    // 🔑 Organization Field
    organization: { type: String, enum: ["PTC", "GICC"], required: true },
  },
  {
    timestamps: true,
    strict: true,
    id: false,
  }
);

// ============================
// Indexes (Performance Boost)
// ============================

// ⚡ Compound index to speed up searches and filters
// Allows text search on description, and fast filtering on refNo + organization
incidentSchema.index({ description: "text", refNo: 1, organization: 1 });

// Optional: If you often search or filter by organization alone
// incidentSchema.index({ organization: 1 });

// ============================
// Pre-save Hook: Auto-increment refNo
// ============================
incidentSchema.pre("save", async function (next) {
  if (this.isNew) {
    let attempts = 0;
    const maxAttempts = 5;

    while (attempts < maxAttempts) {
      try {
        const counter = await Counter.findByIdAndUpdate(
          "incidentCounter",
          { $inc: { seq: 1 } },
          { new: true, upsert: true }
        );

        // Ensure refNo is unique
        const existingIncident = await Incident.findOne({ refNo: counter.seq });
        if (!existingIncident) {
          this.refNo = counter.seq;
          return next();
        }

        attempts++;
      } catch (error) {
        return next(error as Error);
      }
    }

    // If all attempts fail
    return next(new Error("Could not generate unique refNo after multiple attempts"));
  }
  next();
});

// ============================
// Export
// ============================
export const Incident = model("Incident", incidentSchema);
