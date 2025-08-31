// models/Incident.ts

import { Schema, model } from "mongoose"

const incidentSchema = new Schema({
    reportingDepartment: String,
    reportingEmployee: String,
    natureOfException: String,
    auditFinding: String,
    supportDocs: String,
    concernDepartment: String,
    customerDepartment: String,
    supplier: String,
    status: { type: String, default: "Open" },
    date: Date,
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
