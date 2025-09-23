//IncidentActionTable.tsx

"use client"

import { IncidentActionItem, IncidentActions, IncidentAnalysis } from "@/types/IncidentActions"
import { IncidentActionTableLogic } from "./IncidentActionTableLogic/IncidentActionTableLogic"
import { IncidentAnalysisTableLogic } from "./IncidentAnalysisTableLogic/IncidentAnalysisTableLogic"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Props {
    details: IncidentActions
    setDetails: (updater: (prev: IncidentActions) => IncidentActions) => void
}

export default function IncidentActionTable({ details, setDetails }: Props) {

    const setCorrection = (updater: (prev: IncidentActionItem[]) => IncidentActionItem[]) => {
        setDetails(prev => ({ ...prev, correction: updater(prev.correction ?? []) }))
    }

    const setCorrective = (updater: (prev: IncidentActionItem[]) => IncidentActionItem[]) => {
        setDetails(prev => ({ ...prev, corrective: updater(prev.corrective ?? []) }))
    }

    const setAnalysis = (updater: (prev: IncidentAnalysis[]) => IncidentAnalysis[]) => {
        setDetails(prev => ({ ...prev, analysis: updater(prev.analysis ?? []) }))
    }

    const setRootCause = (value: string) => {
        setDetails(prev => ({ ...prev, rootCause: value }))
    }

    const setOccurrence = (value: string) => {
        setDetails(prev => ({ ...prev, occurence: value }))
    }

    const setConsequence = (value: string) => {
        setDetails(prev => ({ ...prev, consequence: value }))
    }

    return (
        <div className="p-6  border rounded-lg bg-white shadow-sm flex flex-col gap-5">
            {/* Correction */}
            <IncidentActionTableLogic title="Correction" details={details.correction ?? []} setDetails={setCorrection} />

            {/* Corrective */}
            <IncidentActionTableLogic title="Corrective" details={details.corrective ?? []} setDetails={setCorrective} />

            {/* Occurrence */}
            <div className="">
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Occurrence
                </Label>
                <Textarea
                    className="w-full min-h-[100px] border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the occurrence..."
                    value={details.occurence ?? ""}
                    onChange={e => setOccurrence(e.target.value)}
                />
            </div>

            {/* Consequence */}
            <div className="">
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Deal with the Consequences
                </Label>
                <Textarea
                    className="w-full min-h-[100px] border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the consequence..."
                    value={details.consequence ?? ""}
                    onChange={e => setConsequence(e.target.value)}
                />
            </div>

            {/* Root Cause */}
            <div className="">
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Root Cause
                </Label>
                <Textarea
                    className="w-full min-h-[100px] border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the root cause..."
                    value={details.rootCause ?? ""}
                    onChange={e => setRootCause(e.target.value)}
                />
            </div>
            {/* Analysis */}
            <IncidentAnalysisTableLogic title="Root Cause Analysis" details={details.analysis ?? []} setDetails={setAnalysis} />

        </div>
    )
}
