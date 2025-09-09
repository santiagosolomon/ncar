// types/IncidentActions.ts

export type IncidentActionItem = {
  actionTaken: string
  personResponsible: string
  timeTable: Date
  followUpDate: Date
  status: string
}

export type IncidentAnalysis = {
  why: string
  probableRootCause?: string
  counterMeasure: string
  who: string
  when: string
  recurrence: string
}

export type IncidentActions = {
  tempId?: string
  _id?: string
  correction: IncidentActionItem[]
  corrective: IncidentActionItem[]
  rootCause: string
  analysis: IncidentAnalysis[]
}