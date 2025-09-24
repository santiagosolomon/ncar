//analysisTable/IncidentActions

"use client"

import { IncidentEvaluation } from "@/types/IncidentEvaluation"
import { EffectivenessTable } from "./evaluationEffectivenessTable/evaluationEffectivenessTable"
import { DocumentationTable } from "./evaluationDocumentationTable/evaluationDocumentationTable"




interface IncidentEvaluationTableProps {
    details: IncidentEvaluation[]
    setDetails: (updater: (prev: IncidentEvaluation[]) => IncidentEvaluation[]) => void
}

export function IncidentEvaluationTable({ details = [], setDetails }: IncidentEvaluationTableProps) {
    const updateRow = (id: string, updater: (row: IncidentEvaluation) => IncidentEvaluation) => {
        setDetails(prev =>
            prev.map(row =>
                (row._id || row.tempId) === id ? updater(row) : row
            )
        )
    }

    return (
        <div className="space-y-6">
            {details.map(row => (
                <div key={row._id || row.tempId || crypto.randomUUID()} className="p-6  border rounded-lg bg-white shadow-sm dark:bg-black">

                    {/* Effectiveness */}
                    <div className="mt-6">
                        <EffectivenessTable
                            title="Effectiveness of Corrective Actions"
                            items={row.effectiveness}
                            onChange={(items) => updateRow(row._id || row.tempId!, r => ({ ...r, effectiveness: items }))}
                        />


                    </div>

                    {/* Documentation */}
                    <div className="mt-6">
                        <DocumentationTable
                            title="Changes to System Documentation (QMS/Risk Register)"
                            items={row.documentation}
                            onChange={(items) => updateRow(row._id || row.tempId!, r => ({ ...r, documentation: items }))}
                        />


                    </div>                    
                </div>
            ))}
        </div>
    )
}

