//analysisTable/IncidentActions

"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { IncidentActions } from "@/types/IncidentActions"
import { ActionsTable } from "./actionsTable/actionsTable"
import { AnalysisTable } from "./analysisTable/analysisTable"

interface IncidentActionsTableProps {
    details: IncidentActions[]
    setDetails: (updater: (prev: IncidentActions[]) => IncidentActions[]) => void
}

export function IncidentActionsTable({ details = [], setDetails }: IncidentActionsTableProps) {
    const updateRow = (id: string, updater: (row: IncidentActions) => IncidentActions) => {
        setDetails(prev =>
            prev.map(row =>
                (row._id || row.tempId) === id ? updater(row) : row
            )
        )
    }

    return (
        <div className="space-y-6 ">
            {details.map(row => (
                <div key={row._id || row.tempId || crypto.randomUUID()} className="p-6  border rounded-lg bg-white shadow-sm">
                    {/* Correction table */}
                    <ActionsTable
                        title="Correction"
                        items={row.correction}
                        onChange={(items) => updateRow(row._id || row.tempId!, r => ({ ...r, correction: items }))}
                    />

                    {/* Corrective table */}
                    <ActionsTable
                        title="Corrective"
                        items={row.corrective}
                        onChange={(items) => updateRow(row._id || row.tempId!, r => ({ ...r, corrective: items }))}
                    />

                    {/* Root Cause */}
                    <div className="mt-6">
                        <Label className="block text-sm font-medium text-gray-700 mb-2">Root Cause</Label>
                        <Textarea
                            className="w-full min-h-[100px] border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Describe the root cause..."
                            value={row.rootCause}
                            onChange={e =>
                                updateRow(row._id || row.tempId!, r => ({ ...r, rootCause: e.target.value }))
                            }
                        />
                    </div>
                      {/* Root Cause */}
                    <div className="mt-6">
                        <Label className="block text-sm font-medium text-gray-700 mb-2">Occurence</Label>
                        <Textarea
                            className="w-full min-h-[100px] border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Occurence..."
                            value={row.occurence}
                            onChange={e =>
                                updateRow(row._id || row.tempId!, r => ({ ...r, occurence: e.target.value }))
                            }
                        />
                    </div>

                    {/* Analysis */}
                    <div className="mt-6">
                        <AnalysisTable
                            title="Why Analysis"
                            details={row.analysis}
                            setDetails={(updater) => updateRow(row._id || row.tempId!, r => ({ ...r, analysis: updater(r.analysis) }))}

                        />

                    </div>
                </div>
            ))}
        </div>
    )
}

