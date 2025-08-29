//app/page.tsx
"use client"

import { useState } from "react"
import IncidentTable from "@/features/incidents/components/IncidentTable"
import IncidentModal from "@/features/incidents/components/IncidentModal"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import type { Incident } from "@ncar/types"

// ✅ initial static incidents
const initialIncidents: Incident[] = [
    {
        refNo: "INC-001",
        description: "Unauthorized access attempt detected",
        classification: "Security",
        status: "Open",
        createdAt: "2025-08-27T10:00:00Z",
    },
    {
        refNo: "INC-002",
        description: "System downtime due to server overload",
        classification: "System",
        status: "Ongoing",
        createdAt: "2025-08-26T14:30:00Z",
    },
    {
        refNo: "INC-003",
        description: "User reported phishing email",
        classification: "Fraud",
        status: "Closed",
        createdAt: "2025-08-25T08:45:00Z",
    },
]

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false)
    const [incidents, setIncidents] = useState<Incident[]>(initialIncidents)
    const [isPending, setIsPending] = useState(false)

    // form state for IncidentModal
    const [form, setForm] = useState({
        description: "",
        classification: "",
        status: "",
        natureOfException: "",
        auditFinding: "",
        reportingDepartment: "",
        reportingEmployee: "",
        supportDocs: "",
        concernDepartment: "",
        supplier: "",
        customerDepartment: "",
        witness: "",
    })



    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsPending(true)

        // simulate saving
        setTimeout(() => {
            const newIncident: Incident = {
                refNo: `INC-${(incidents.length + 1).toString().padStart(3, "0")}`,
                description: form.description,
                classification: form.classification,
                status: form.status as Incident["status"],
                createdAt: new Date().toISOString(),
            }

            setIncidents((prev) => [newIncident, ...prev]) // prepend new one
            setForm({
                description: "",
                classification: "",
                status: "",
                natureOfException: "",
                auditFinding: "",
                reportingDepartment: "",
                reportingEmployee: "",
                supportDocs: "",
                concernDepartment: "",
                supplier: "",
                customerDepartment: "",
                witness: "",
            }) // reset
            setIsPending(false)
            setIsOpen(false)
        }, 800)
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-red-600 text-lg">Incident Reports</h1>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button className="cursor-pointer">+ Create</Button>
                    </DialogTrigger>

                    <DialogContent className="max-h-[700px] 2xl:max-h-[750px] sm:max-w-[1100px]  max-w-[600px] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>File Incident Report</DialogTitle>
                        </DialogHeader>

                        {/* 👇 Add spacing so form doesn't clash */}
                        <div className="mt-4">
                            <IncidentModal
                                form={form}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                onClose={() => setIsOpen(false)}
                                isPending={isPending}
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            {/* ✅ Table shows latest incidents */}
            <IncidentTable data={incidents} />
        </div>
    )
}
