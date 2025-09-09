//models/IncidentEvaluation.ts

import { Schema } from "mongoose"

const incidentEffectivenessSchema = new Schema({

    evaluatedBy: { type: String },
    date: { type: Date },
    remarks: { type: String },
}, {
    _id: false
});

const incidentDocumentation = new Schema(
    {
        followedUpBy: { type: String },
        date: { type: Date },
        remarks: { type: String },

    },
    {
        _id: false,

    }
)

export const incidentEvaluationSchema = new Schema({
    effectiveness: [incidentEffectivenessSchema],
    documentation: [incidentDocumentation]
}, {
    timestamps: true,
    strict: true,
    id: false
});
