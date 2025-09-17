//types/incidentModal.ts

import { IncidentDetails } from "./incidentDetails"
import { IncidentIssues } from "./incidentIssues"
import { IncidentIssuesSelection } from "./incidentIssues"
import { IncidentActions } from "./IncidentActions"
import { IncidentEvaluation } from "./IncidentEvaluation"


export type Organization = "PTC" | "GICC" | "ALL"

export interface IncidentForm {
  organization: Organization
  refNo?: number // Optional since it will be auto-generated
  dateReported?: Date
  description: string
  natureOfException: string
  auditFinding: string
  reportingDepartment: string
  reportingEmployee: string
  concernType: 'customer' | 'supplier' | 'department'
  concernName: string
  customerDepartment: string
  moduleOfPurchase: 'Imported' | 'Local'
  typeOfDelivery: 'indent' | 'exstock' | 'forward'
  date?: Date
  incidentDetails?: IncidentDetails[]
  incidentIssues?: IncidentIssues[]
  incidentIssuesSelection?: IncidentIssuesSelection // checkboxes
  incidentActions?: IncidentActions[]
  incidentEvaluation?: IncidentEvaluation[]
}

export interface IncidentResponse extends IncidentForm {
  _id: string
  createdAt: string
  updatedAt: string
}