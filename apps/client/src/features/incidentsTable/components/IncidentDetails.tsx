//incidentsTable/IncidentDetails.tsx

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

interface IncidentDetailsTableProps {
  data: IncidentDetails[]
}

type RowMode = "view" | "edit" | "delete-confirm" | "add"

export function IncidentDetailsTable({ data }: IncidentDetailsTableProps) {
  const [rows, setRows] = useState(data)
  const [rowModes, setRowModes] = useState<Record<string, RowMode>>({})
  const [newRow, setNewRow] = useState<IncidentDetails | null>(null)

  const startEdit = (id: string) => setRowModes({ ...rowModes, [id]: "edit" })
  const startDelete = (id: string) =>
    setRowModes({ ...rowModes, [id]: "delete-confirm" })
  const cancel = (id: string) =>
    setRowModes({ ...rowModes, [id]: "view" })
  const save = (id: string, updated: IncidentDetails) => {
    setRows(rows.map(r => (r.id === id ? updated : r)))
    setRowModes({ ...rowModes, [id]: "view" })
  }
  const confirmDelete = (id: string) => {
    setRows(rows.filter(r => r.id !== id))
    const { [id]: _, ...rest } = rowModes
    setRowModes(rest)
  }

  const startAdd = () => {
    setNewRow({
      id: crypto.randomUUID(),
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
      setRows([...rows, newRow])
      setNewRow(null)
    }
  }

  const renderCell = (incident: IncidentDetails, field: keyof IncidentDetails) => {
    const mode = rowModes[incident.id]
    if (mode === "edit" || mode === "add") {
      return (
        <input
          className="border rounded px-2 py-1 w-full text-sm"
          value={incident[field]}
          onChange={e =>
            setRows(rows.map(r =>
              r.id === incident.id ? { ...r, [field]: e.target.value } : r
            ))
          }
        />
      )
    }
    return incident[field]
  }

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button
          size="sm"
          variant="outline"
          onClick={startAdd}
          disabled={!!newRow}
        >
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
            {rows.map(row => {
              const mode = rowModes[row.id] || "view"
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
                          <DropdownMenuItem onClick={() => startEdit(row.id)}>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => startDelete(row.id)}>
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                    {mode === "edit" && (
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => save(row.id, row)}
                        >
                          <Save className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => cancel(row.id)}
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    )}
                    {mode === "delete-confirm" && (
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => confirmDelete(row.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => cancel(row.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
            {newRow && (
              <tr key={newRow.id} className="bg-yellow-50">
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.type}
                    onChange={e =>
                      setNewRow({ ...newRow, type: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.deviation}
                    onChange={e =>
                      setNewRow({ ...newRow, deviation: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.description}
                    onChange={e =>
                      setNewRow({ ...newRow, description: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.sku}
                    onChange={e => setNewRow({ ...newRow, sku: e.target.value })}
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.details}
                    onChange={e =>
                      setNewRow({ ...newRow, details: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.outOfTotal}
                    onChange={e =>
                      setNewRow({ ...newRow, outOfTotal: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.poNo}
                    onChange={e =>
                      setNewRow({ ...newRow, poNo: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.lotNo}
                    onChange={e =>
                      setNewRow({ ...newRow, lotNo: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.containerNo}
                    onChange={e =>
                      setNewRow({ ...newRow, containerNo: e.target.value })
                    }
                  />
                </td>
                <td className="px-2 py-2 border">
                  <input
                    className="border rounded px-2 py-1 w-full text-sm"
                    value={newRow.billOfLandingNo}
                    onChange={e =>
                      setNewRow({ ...newRow, billOfLandingNo: e.target.value })
                    }
                  />
                </td>
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
