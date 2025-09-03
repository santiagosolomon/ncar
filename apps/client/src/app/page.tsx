//app/page.tsx

"use client"

import { useState } from "react"
import IncidentMainTable from "@/features/incidents/components/IncidentMainTable"
import IncidentModal from "@/features/incidentsModal/components/IncidentModal"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useIncidents } from "@/hooks/useIncidentQueries"
import { IncidentForm } from "@/types/incidentModal"

const defaultForm: IncidentForm = {
  refNo: 0,
  description: "",
  natureOfException: "",
  auditFinding: "",
  reportingDepartment: "",
  reportingEmployee: "",
  concernType: "supplier",
  concernName: "",
  customerDepartment: "",
  moduleOfPurchase: "Imported",
  typeOfDelivery: "indent",
  date: undefined,
  incidentDetails: [],
}

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [editingIncident, setEditingIncident] = useState<(IncidentForm & { _id: string }) | null>(null)

  // 🚀 persist form state in parent
  const [form, setForm] = useState<IncidentForm>(defaultForm)

  const { data: incidents, isLoading, isError } = useIncidents()


  const handleRowClick = (incident: IncidentForm & { _id: string }) => {
    setEditingIncident(incident)
    setForm({
      ...incident,
      date: incident.date ? new Date(incident.date) : undefined,
    })
    setIsOpen(true)
  }

  const handleCreate = () => {
    if (editingIncident) {
      setForm(defaultForm)
    }
    setEditingIncident(null)
    setIsOpen(true)
  }

  const handleClose = () => {
    setEditingIncident(null)
    setIsOpen(false)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-red-600 text-lg">Incident Reports</h1>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer" onClick={handleCreate}>+ Create</Button>
          </DialogTrigger>

          <DialogContent className="max-h-[700px] 2xl:max-h-[750px] sm:max-w-[1100px] max-w-[600px] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingIncident ? "Edit Incident Report" : "File Incident Report"}</DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <IncidentModal onClose={handleClose} form={form} setForm={setForm} editingId={editingIncident?._id} defaultForm={defaultForm} />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* ✅ Render incident list from backend */}
      {isLoading && <p>Loading incidents...</p>}
      {isError && <p className="text-red-500">Failed to load incidents</p>}
      {incidents && <IncidentMainTable data={incidents} onRowClick={handleRowClick} />}
    </div>
  )
}
