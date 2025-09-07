//types/incidentModal.ts

import { IncidentDetails } from "./incidentDetails"
import { IncidentIssues } from "./incidentIssues"
import { IncidentActions } from "./IncidentActions"

export interface IncidentForm {
  refNo?: number // Optional since it will be auto-generated
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
  incidentActions?: IncidentActions[]
}

export interface IncidentResponse extends IncidentForm {
  _id: string
  createdAt: string
  updatedAt: string
}