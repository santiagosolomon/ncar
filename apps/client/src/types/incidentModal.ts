//types/incidentModal.ts

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
}