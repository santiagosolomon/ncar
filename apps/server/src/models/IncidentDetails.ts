//models/IncidentDetails.ts

import { Schema } from "mongoose"

export const incidentDetailsSchema = new Schema({
    
    type: { type: String },
    deviation: { type: String },
    description: { type: String },
    sku: { type: String },
    details: { type: String },
    outOfTotal: { type: String },
    poNo: { type: String },
    lotNo: { type: String },
    containerNo: { type: String },
    ladingNo: { type: String },
}, {
    timestamps: true,
    strict: true,
    id: false
});
