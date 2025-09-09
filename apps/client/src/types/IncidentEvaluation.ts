
export type IncidentEffectiveness = {
  evaluatedBy: string
  date: Date
  remarks: string
}

export type IncidentDocumentation = {
  followedUpBy: string
  date: Date
  remarks: string
}

export type IncidentEvaluation = {
  tempId?: string
  _id?: string
  effectiveness: IncidentEffectiveness[]
  documentation: IncidentDocumentation[]
}