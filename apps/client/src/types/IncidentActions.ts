// types/IncidentActions.ts

export type IncidentActionItem = {
  tempId?: string
  _id?: string
  actionTaken: string
  personResponsible: string
  timeTable: Date
  followUpDate: Date
  status: string
}

export type IncidentAnalysis = {
  tempId?: string
  _id?: string
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
  occurence: string
  consequence: string
  rootCause: string
  analysis: IncidentAnalysis[]
}