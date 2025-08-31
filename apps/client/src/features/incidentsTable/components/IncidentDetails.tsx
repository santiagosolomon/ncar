// features/incidentsTable/components/IncidentDetails.tsx

"use client"

import { useState } from "react"
import { IncidentDetails } from "@/types/incidentDetails"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, X, Save, Trash2, Pencil, Plus } from "lucide-react"
import {
  useIncidents,
  useAddIncident,
  useUpdateIncident,
  useDeleteIncident,
} from "@/hooks/useIncidentQueries"
import { useIncidentStore } from "@/store/incidentStore"


export function IncidentDetailsTable({}) {
  const { data: incidents = [], isLoading } = useIncidents()
  const addIncident = useAddIncident()
  const updateIncident = useUpdateIncident()
  const deleteIncident = useDeleteIncident()

  const { rowModes, setMode, reset } = useIncidentStore()
  const [newRow, setNewRow] = useState<IncidentDetails | null>(null)

  // ---- Row Actions ----
  const startEdit = (id: string) => setMode(id, "edit")
  const startDelete = (id: string) => setMode(id, "delete-confirm")
  const cancel = (id: string) => reset(id)

  const save = (incident: IncidentDetails) => {
    updateIncident.mutate(incident, {
      onSuccess: () => reset(incident.id!),
    })
  }

  const confirmDelete = (id: string) => {
    deleteIncident.mutate(id, {
      onSuccess: () => reset(id),
    })
  }

  const startAdd = () => {
    setNewRow({
      id: undefined, // backend will generate _id
      type: "",
      deviation: "",
      description: "",
      sku: "",
      details: "",
      outOfTotal: "",
      poNo: "",
      lotNo: "",
      containerNo: "",
      billOfLandingNo: "",
    })
  }
  const cancelAdd = () => setNewRow(null)
  const saveAdd = () => {
    if (newRow) {
      addIncident.mutate(newRow, {
        onSuccess: () => setNewRow(null),
      })
    }
  }

  const renderCell = (incident: IncidentDetails, field: keyof IncidentDetails) => {
    const mode = rowModes[incident.id!] // `id` comes from Mongo as `_id`
    if (mode === "edit") {
      return (
        <input
          className="border rounded px-2 py-1 w-full text-sm"
          value={incident[field] || ""}
          onChange={e =>
            updateIncident.mutate({ ...incident, [field]: e.target.value })
          }
        />
      )
    }
    return incident[field]
  }

  if (isLoading) {
    return <div className="p-4">Loading incidents...</div>
  }

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button size="sm" variant="outline" onClick={startAdd} disabled={!!newRow}>
          <Plus className="w-4 h-4 " /> Add
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border">Type</th>
              <th className="px-2 py-2 border">Deviation</th>
              <th className="px-2 py-2 border">Description</th>
              <th className="px-2 py-2 border">SKU</th>
              <th className="px-2 py-2 border">Details</th>
              <th className="px-2 py-2 border"># Out of Total Product</th>
              <th className="px-2 py-2 border">PO No.</th>
              <th className="px-2 py-2 border">Lot No.</th>
              <th className="px-2 py-2 border">Container No.</th>
              <th className="px-2 py-2 border">Bill of Landing No.</th>
              <th className="px-2 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map(row => {
              const mode = rowModes[row.id!] || "view"
              return (
                <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                  <td className="px-2 py-2 border">{renderCell(row, "type")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "deviation")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "description")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "sku")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "details")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "outOfTotal")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "poNo")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "lotNo")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "containerNo")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "billOfLandingNo")}</td>
                  <td className="px-2 py-2 border">
                    {mode === "view" && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => startEdit(row.id!)}>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => startDelete(row.id!)}>
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                    {mode === "edit" && (
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" onClick={() => save(row)}>
                          <Save className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => cancel(row.id!)}>
                          <X className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    )}
                    {mode === "delete-confirm" && (
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" onClick={() => confirmDelete(row.id!)}>
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => cancel(row.id!)}>
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}

            {newRow && (
              <tr key="new" className="bg-yellow-50">
                {[
                  "type",
                  "deviation",
                  "description",
                  "sku",
                  "details",
                  "outOfTotal",
                  "poNo",
                  "lotNo",
                  "containerNo",
                  "billOfLandingNo",
                ].map(field => (
                  <td key={field} className="px-2 py-2 border">
                    <input
                      className="border rounded px-2 py-1 w-full text-sm"
                      value={(newRow as any)[field]}
                      onChange={e =>
                        setNewRow({ ...newRow, [field]: e.target.value })
                      }
                    />
                  </td>
                ))}
                <td className="px-2 py-2 border">
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" onClick={saveAdd}>
                      <Save className="w-4 h-4 text-green-600" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={cancelAdd}>
                      <X className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
