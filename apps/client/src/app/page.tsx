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

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: incidents, isLoading, isError } = useIncidents()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-red-600 text-lg">Incident Reports</h1>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="cursor-pointer">+ Create</Button>
          </DialogTrigger>

          <DialogContent className="max-h-[700px] 2xl:max-h-[750px] sm:max-w-[1100px] max-w-[600px] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>File Incident Report</DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <IncidentModal onClose={() => setIsOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* ✅ Render incident list from backend */}
      {isLoading && <p>Loading incidents...</p>}
      {isError && <p className="text-red-500">Failed to load incidents</p>}
      {incidents && <IncidentMainTable data={incidents} />}
    </div>
  )
}
