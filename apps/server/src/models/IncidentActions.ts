//models/IncidengActions.ts

import { Schema } from "mongoose"

const actionSchema = new Schema(
  {
    actionTaken: { type: String },
    personResponsible: { type: String },
    timeTable: { type: Date },
    followUpDate: { type: Date },
    status: {
      type: String,
      default: 'open'
    }
  },
  { _id: false }
)

const analysisSchema = new Schema(
  {
    why: { type: String },
    probableRootCause: { type: String },
    counterMeasure: { type: String },
    who: { type: String },
    when: { type: String },
    recurrence: { type: String }
  },
  {
    _id: false, 

  }
)


export const incidentActionsSchema = new Schema(
  {
    correction: [actionSchema],  //  correction actions
    corrective: [actionSchema],  //  corrective actions
    occurence: { type: String },
    consequence: { type: String },
    rootCause: { type: String },
    analysis: [analysisSchema]
  },
  { _id: false, timestamps: true, strict: true }
)
