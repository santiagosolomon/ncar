"use client"

import { useState } from "react"
import { IncidentEffectiveness } from "@/types/IncidentEvaluation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  MoreHorizontal,
  X,
  Check,
  Trash2,
  Pencil,
  Plus,
  Calendar as CalendarIcon,
} from "lucide-react"

interface Props {
  title: string
  items: IncidentEffectiveness[]
  onChange: (items: IncidentEffectiveness[]) => void
}

export function EffectivenessTable({ title, items, onChange }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [newRow, setNewRow] = useState<IncidentEffectiveness | null>(null)
  const [draftRow, setDraftRow] = useState<IncidentEffectiveness | null>(null)

  const startAdd = () => {
    setNewRow({
      evaluatedBy: "",
      date: new Date(),
      remarks: "",
    })
  }

  const saveAdd = () => {
    if (newRow) {
      onChange([...items, newRow])
      setNewRow(null)
    }
  }

  const startEdit = (row: IncidentEffectiveness, idx: number) => {
    setEditingId(String(idx))
    setDraftRow({ ...row })
  }

  const saveEdit = () => {
    if (draftRow && editingId !== null) {
      const updated = [...items]
      updated[Number(editingId)] = draftRow
      onChange(updated)
      setEditingId(null)
      setDraftRow(null)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setDraftRow(null)
  }

  const deleteRow = (idx: number) => {
    onChange(items.filter((_, i) => i !== idx))
    setDeleteConfirmId(null)
  }

  const renderCalendarCell = (
    row: IncidentEffectiveness,
    isEditing: boolean,
    isNew: boolean
  ) => {
    const activeRow = isEditing ? draftRow : isNew ? newRow : null

    if (!isEditing && !isNew) {
      return row.date ? new Date(row.date).toLocaleDateString() : ""
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !activeRow?.date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {activeRow?.date ? format(new Date(activeRow.date), "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-0">
          <Calendar
            mode="single"
            selected={activeRow?.date ? new Date(activeRow.date) : undefined}
            onSelect={(date) =>
              date &&
              (isEditing
                ? setDraftRow({ ...draftRow!, date })
                : setNewRow({ ...newRow!, date }))
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  }

  const renderCell = (row: IncidentEffectiveness, field: keyof IncidentEffectiveness) => {
    const isEditing = editingId === String(items.indexOf(row))
    const isNew = newRow && row === newRow

    if (field === "date") {
      return renderCalendarCell(row, isEditing, !!isNew)
    }

    if (!isEditing && !isNew) {
      return (row as any)[field]
    }

    return (
      <Input
        type="text"
        className="border rounded px-2 py-1 w-full text-sm"
        value={(isEditing ? (draftRow as any)?.[field] : (newRow as any)?.[field]) ?? ""}
        onChange={(e) =>
          isEditing
            ? setDraftRow({ ...draftRow!, [field]: e.target.value })
            : setNewRow({ ...newRow!, [field]: e.target.value })
        }
      />
    )
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{title}</h3>
        <Button className="cursor-pointer" size="sm" variant="outline" onClick={startAdd} disabled={!!newRow}>
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border">Evaluated By</th>
              <th className="px-2 py-2 border">Date</th>
              <th className="px-2 py-2 border">Remarks</th>
              <th className="px-2 py-2 border w-14">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => {
              const isEditing = editingId === String(idx)
              const isDeleting = deleteConfirmId === String(idx)
              return (
                <tr key={idx} className="odd:bg-white even:bg-gray-50">
                  <td className="px-2 py-2 border">{renderCell(row, "evaluatedBy")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "date")}</td>
                  <td className="px-2 py-2 border">{renderCell(row, "remarks")}</td>
                  <td className="px-2 py-2 border w-14">
                    {!isEditing && !isDeleting && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="cursor-pointer" variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="cursor-pointer" onClick={() => startEdit(row, idx)}>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => setDeleteConfirmId(String(idx))}
                          >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}

                    {isEditing && (
                      <div className="flex">
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
                          onClick={() => deleteRow(idx)}
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
              <tr className="bg-yellow-50">
                {["evaluatedBy", "date", "remarks"].map((field) => (
                  <td key={field} className="px-2 py-2 border">
                    {renderCell(newRow, field as keyof IncidentEffectiveness)}
                  </td>
                ))}
                <td className="px-2 py-2 border">
                  <div className="flex">
                    <Button className="cursor-pointer" size="icon" variant="ghost" onClick={saveAdd}>
                      <Check className="w-4 h-4 text-green-600" />
                    </Button>
                    <Button
                      className="cursor-pointer"
                      size="icon"
                      variant="ghost"
                      onClick={() => setNewRow(null)}
                    >
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
