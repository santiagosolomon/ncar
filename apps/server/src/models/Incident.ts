// models/Incident.ts

import { Schema, model } from "mongoose"
import { incidentDetailsSchema } from "./IncidentDetails";
import { incidentIssuesSchema } from "./IncidentIssues";

// Counter for auto-incrementing refNo
const counterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const Counter = model('Counter', counterSchema);

// Initialize counter if it doesn't exist
async function initializeCounter() {
    try {
        // Check if counter exists first
        const existingCounter = await Counter.findById('incidentCounter');
        if (!existingCounter) {
            // Only create if it doesn't exist
            await Counter.create({ _id: 'incidentCounter', seq: 0 });
            console.log('Counter initialized successfully');
        } else {
            console.log('Counter already exists, using existing counter');
        }
    } catch (error) {
        console.error('Error initializing counter:', error);
    }
}

// Call initialization
initializeCounter();

const incidentSchema = new Schema({
    refNo: { type: Number, unique: true },
    description: { type: String },
    reportingDepartment: { type: String },
    reportingEmployee: { type: String },
    natureOfException: { type: String },
    auditFinding: { type: String },
    concernType: { type: String, enum: ['customer', 'supplier', 'department'] },
    concernName: { type: String },
    customerDepartment: String,
    moduleOfPurchase: { type: String, enum: ['Imported', 'Local'] },
    typeOfDelivery: { type: String, enum: ['indent', 'exstock', 'forward'] },
    date: { type: Date },
    incidentDetails: [incidentDetailsSchema],
    incidentIssues: [incidentIssuesSchema],

}, {
    timestamps: true,
    strict: true, // This ensures no extra fields are saved
    id: false // This prevents Mongoose from creating a virtual 'id' getter
});

// Add pre-save hook for auto-incrementing refNo
incidentSchema.pre('save', async function (next) {
    if (this.isNew) {
        let attempts = 0;
        const maxAttempts = 5;

        while (attempts < maxAttempts) {
            try {
                const counter = await Counter.findByIdAndUpdate(
                    'incidentCounter',
                    { $inc: { seq: 1 } },
                    { new: true, upsert: true }
                );

                // Check if refNo already exists
                const existingIncident = await Incident.findOne({ refNo: counter.seq });
                if (!existingIncident) {
                    this.refNo = counter.seq;
                    return next();
                }

                // If refNo exists, try again
                attempts++;
            } catch (error) {
                return next(error as Error);
            }
        }

        // If we've exhausted all attempts
        return next(new Error('Could not generate unique refNo after multiple attempts'));
    }
    next();
});

export const Incident = model("Incident", incidentSchema);
