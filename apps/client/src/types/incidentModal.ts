//types/incidentModal.ts

export interface IncidentDetails {
    tempId?: string
    _id?: string
    type: string
    deviation: string
    description: string
    sku: string
    details: string
    outOfTotal: string
    poNo: string
    lotNo: string
    containerNo?: string
    ladingNo: string
}

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
}

export interface IncidentResponse extends IncidentForm {
  _id: string
  createdAt: string
  updatedAt: string
}