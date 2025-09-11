// types/incidentIssues.ts
export interface IncidentIssues {
  tempId?: string
  _id?: string
  grossWeight: string
  netWeight: string
  tareWeight: string

  // ✅ new fields
  quantityIssue?: boolean
  qualityIssue?: boolean
  procedureDocumentation?: boolean
  packagingProblem?: boolean
  others?: string
}
