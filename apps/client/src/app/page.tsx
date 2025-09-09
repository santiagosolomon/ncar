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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { useIncidents } from "@/hooks/useIncidentQueries"
import { IncidentForm } from "@/types/incidentModal"

import { Calendar } from "@/components/ui/calendar"

import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { format, set } from "date-fns"

const defaultForm: IncidentForm = {
  refNo: 0,
  dateReported: undefined,
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
  incidentIssues: [],
  incidentActions: [   // 👈 initialize with one blank action set
    {
      tempId: crypto.randomUUID(),
      correction: [],
      corrective: [],
      rootCause: "",
      analysis: []
    },
  ],
  incidentEvaluation: [
    {
      tempId: crypto.randomUUID(),
      effectiveness: [],
      documentation: []
    }
  ], 
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [isOpen, setIsOpen] = useState(false)
  const [editingIncident, setEditingIncident] = useState<(IncidentForm & { _id: string }) | null>(null)

  // 🚀 persist form state in parent
  const [form, setForm] = useState<IncidentForm>(defaultForm)

  const { data: incidents, isLoading, isError } = useIncidents(currentPage, itemsPerPage)

  const handleChange = (field: keyof IncidentForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

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
    setForm(defaultForm)
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
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4">
                  <DialogTitle>{editingIncident ? "Edit Incident Report" : "File Incident Report"}</DialogTitle>
                  <div className="text-[0.84rem] text-gray-400 italic font-semibold">{editingIncident ? `(Ref No: ${form.refNo})` : null}</div>
                </div>
                <div className="mr-7 mt-2 flex items-center">
                  <Popover>
                    <PopoverTrigger asChild className="h-[34px]">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "min-w-[140px] justify-start text-left font-normal cursor-pointer ",
                          !form.dateReported && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2  h-4 w-4 shrink-0" />
                        <span className="whitespace-nowrap">
                          {form.dateReported ? format(form.dateReported, "PPP") : <span>Filing Date</span>}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        className="w-[300px]"
                        mode="single"
                        selected={form.dateReported}
                        onSelect={(d) => handleChange("dateReported", d ?? undefined)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
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
      {incidents && (
        <IncidentMainTable
          editingIncident={editingIncident}
          data={incidents.data}
          onRowClick={handleRowClick}
          currentPage={incidents.page}
          totalPages={incidents.totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => {
            if (page >= 1 && page <= incidents.totalPages) {
              setCurrentPage(page);
            }
          }}
          onItemsPerPageChange={(val) => {
            setItemsPerPage(val);
            setCurrentPage(1); // reset to first page
          }}
        />
      )}
    </div>
  )
}
