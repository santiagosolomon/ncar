// features/incidentsTable/components/IncidentDetailsTableLogic/IncidentDetailsTableLogic.tsx

"use client"

import { useState, useEffect } from "react"
import { IncidentAnalysis } from "@/types/IncidentActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, X, Check, Trash2, Pencil, Plus } from "lucide-react"

// ✅ new hook
import { useIncidentTableLogic } from "@/hooks/useIncidentTableLogic"

interface Props {
  title: string
  details: IncidentAnalysis[]
  setDetails: (updater: (prev: IncidentAnalysis[]) => IncidentAnalysis[]) => void
}

export function IncidentAnalysisTableLogic({ details, setDetails, title }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [newRow, setNewRow] = useState<IncidentAnalysis | null>(null)
  const [draftRow, setDraftRow] = useState<IncidentAnalysis | null>(null)

  // Ensure unique IDs for all rows
  useEffect(() => {
    const needsIds = details.some(row => !row._id && !row.tempId)
    if (needsIds) {
      setDetails(prev => 
        prev.map(row => ({
          ...row,
          tempId: row._id || row.tempId || crypto.randomUUID()
        }))
      )
    }
  }, [details, setDetails])

  const startAdd = () => {
    setNewRow({
      tempId: crypto.randomUUID(),
      why: "",
      probableRootCause: "",
      counterMeasure: "",
      who: "",
      when: "",
      recurrence: ""
    })
  }

  const saveAdd = () => {
    if (!newRow) return
    
    // Ensure new row has a unique ID
    const rowToAdd = {
      ...newRow,
      tempId: newRow.tempId || crypto.randomUUID()
    }
    
    setDetails(prev => [...prev, rowToAdd])
    setNewRow(null)
  }

  const startEdit = (row: IncidentAnalysis) => {
    const id = row._id || row.tempId
    if (!id) return // Safety check
    setEditingId(id)
    setDraftRow({ ...row })
  }

  const saveEdit = () => {
    if (!draftRow) return
    const id = draftRow._id || draftRow.tempId
    if (!id) return // Safety check

    setDetails(prev =>
      prev.map(d => {
        const currentId = d._id || d.tempId
        return currentId === id ? { ...draftRow } : d
      })
    )
    setEditingId(null)
    setDraftRow(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setDraftRow(null)
  }

  const deleteRow = (id: string) => {
    if (!id) return // Safety check
    
    setDetails(prev => {
      // Create new array without the deleted row
      return prev.filter(d => {
        const currentId = d._id || d.tempId
        return currentId && currentId !== id // Only keep rows with valid IDs that don't match
      })
    })
    setDeleteConfirmId(null)
  }

  const renderCell = (row: IncidentAnalysis, field: keyof IncidentAnalysis) => {
    const isEditing = editingId === (row._id || row.tempId)
    if (!isEditing) return (row as any)[field]

    return (
      <Input
        className="border rounded px-2 py-1 w-full text-sm"
        value={(draftRow as any)?.[field] ?? ""}
        onChange={e =>
          setDraftRow(prev => prev ? { ...prev, [field]: e.target.value } : null)
        }
      />
    )
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{title}</h3>
        <Button size="sm" variant="outline" className="cursor-pointer" onClick={startAdd} disabled={!!newRow}>
          <Plus className="w-4 h-4" /> Add
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border">Why?</th>
              <th className="px-2 py-2 border">Probable Root Cause</th>
              <th className="px-2 py-2 border">Counter Measure</th>
              <th className="px-2 py-2 border">Who</th>
              <th className="px-2 py-2 border">When</th>
              <th className="px-2 py-2 border">Recurrence</th>
              <th className="px-2 py-2 border w-14">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((row, index) => {
              const isEditing = editingId === (row._id || row.tempId)
              const isDeleting = deleteConfirmId === (row._id || row.tempId)
              return (
                <tr
                  key={row._id || row.tempId || index}
                  className="odd:bg-white even:bg-gray-50"
                >
                  <td className="px-2 py-2 border">{renderCell(row, "why")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "probableRootCause")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "counterMeasure")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "who")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "when")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "recurrence")}</td>
                  <td className="px-2 py-2 border w-14">
                    {!isEditing && !isDeleting && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="cursor-pointer" variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="cursor-pointer" onClick={() => startEdit(row)}>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => setDeleteConfirmId(row._id || row.tempId!)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}

                    {isEditing && (
                      <div className="flex ">
                        <Button className="cursor-pointer" size="icon" variant="ghost" onClick={saveEdit}>
                          <Check className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button className="cursor-pointer" size="icon" variant="ghost" onClick={cancelEdit}>
                          <X className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    )}

                    {isDeleting && (
                      <div className="flex">
                        <Button
                          className="cursor-pointer"
                          size="icon"
                          variant="ghost"
                          onClick={() => deleteRow(row._id || row.tempId!)}
                        >
                          <Check className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button
                          className="cursor-pointer"
                          size="icon"
                          variant="ghost"
                          onClick={() => setDeleteConfirmId(null)}
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}

            {newRow && (
              <tr key={newRow.tempId} className="bg-yellow-50">
                {["why", "probableRootCause", "counterMeasure", "who", "when", "recurrence"].map((field) => (
                  <td key={field} className="px-2 py-2 border">
                    <Input
                      value={(newRow as any)[field]}
                      onChange={e => setNewRow({ ...newRow, [field]: e.target.value })}
                    />
                  </td>
                ))}
                <td className="px-2 py-2 border">
                  <div className="flex">
                    <Button size="icon" variant="ghost" onClick={saveAdd}>
                      <Check className="w-4 h-4 text-green-600" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => setNewRow(null)}>
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
