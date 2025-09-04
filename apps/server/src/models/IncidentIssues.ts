//models/IncidentDetails.ts

import { Schema } from "mongoose"

export const incidentIssuesSchema = new Schema({
   
    grossWeight: { type: String },
    netWeight: { type: String },
    tareWeight: { type: String },
}, {
    timestamps: true,
    strict: true,
    id: false
});
