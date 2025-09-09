//incidentsTable/IncidentIssues.tsx

"use client"

import { useState } from "react"
import { IncidentIssues } from "@/types/incidentIssues"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, X, Check, Save, Trash2, Pencil, Plus } from "lucide-react"

interface IncidentIssuesTableProps {
    details: IncidentIssues[]
    setDetails: (updater: (prev: IncidentIssues[]) => IncidentIssues[]) => void
}

export function IncidentIssuesTable({ details, setDetails }: IncidentIssuesTableProps) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
    const [newRow, setNewRow] = useState<IncidentIssues | null>(null)
    const [draftRow, setDraftRow] = useState<IncidentIssues | null>(null)

    const startAdd = () => {
        setNewRow({tempId: crypto.randomUUID(), grossWeight: "", netWeight: "", tareWeight: "" })
    }

    const saveAdd = () => {
        if (newRow) {
            setDetails(prev => [...prev, newRow])
            setNewRow(null)
        }
    }

    const startEdit = (row: IncidentIssues) => {
        setEditingId(row._id || row.tempId || null)
        setDraftRow({ ...row })
    }

    const saveEdit = () => {
        if (draftRow) {
            setDetails(prev => prev.map(d => (d._id || d.tempId) === (draftRow._id || draftRow.tempId) ? draftRow : d))
            setEditingId(null)
            setDraftRow(null)
        }
    }

    const cancelEdit = () => {
        setEditingId(null)
        setDraftRow(null)
    }

    const deleteRow = (id: string) => {
        setDetails(prev => prev.filter(d => d._id !== id && d.tempId !== id))
        setDeleteConfirmId(null)
    }

    const renderCell = (row: IncidentIssues, field: keyof IncidentIssues) => {
        const isEditing = editingId === (row._id || row.tempId)
        if (!isEditing) return (row as any)[field]
        return (
            <Input
                className="border rounded px-2 py-1 w-full text-sm"
                value={(draftRow as any)[field]}
                onChange={e => setDraftRow({ ...draftRow, [field]: e.target.value })}
            />
        )
    }

    return (
        <div>
            <div className="flex justify-end mb-2">
                <Button size="sm" variant="outline" className="cursor-pointer " onClick={startAdd} disabled={!!newRow}>
                    <Plus className="w-4 h-4" /> Add
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border text-sm text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Gross Weight</th>
                            <th className="px-4 py-2 border">Net Weight</th>
                            <th className="px-4 py-2 border">Tare Weight</th>
                            <th className="px-2 py-2 border w-14">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map(row => {
                            const isEditing = editingId === (row._id || row.tempId)
                            const isDeleting = deleteConfirmId === (row._id || row.tempId)
                            return (
                                <tr key={row._id || row.tempId} className="odd:bg-white even:bg-gray-50">
                                    <td className="px-4 py-2 border">{renderCell(row, "grossWeight")}</td>
                                    <td className="px-4 py-2 border">{renderCell(row, "netWeight")}</td>
                                    <td className="px-4 py-2 border">{renderCell(row, "tareWeight")}</td>
                                    <td className="px-2 py-2 border w-14">
                                        {!isEditing && !isDeleting && (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost" className="cursor-pointer">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem onClick={() => startEdit(row)}><Pencil className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => setDeleteConfirmId(row._id || row.tempId!)}><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                        {isEditing && (
                                            <div className="flex">
                                                <Button size="icon" variant="ghost" onClick={saveEdit} className="cursor-pointer"><Check className="w-4 h-4 text-green-600" /></Button>
                                                <Button size="icon" variant="ghost" onClick={cancelEdit} className="cursor-pointer"><X className="w-4 h-4 text-red-600" /></Button>
                                            </div>
                                        )}
                                        {isDeleting && (
                                            <div className="flex ">
                    
                                                <Button size="icon" variant="ghost" onClick={() => deleteRow(row._id || row.tempId!)} className="cursor-pointer"><Check className="w-4 h-4 text-green-600" /></Button>
                                                <Button size="icon" variant="ghost" onClick={() => setDeleteConfirmId(null)} className="cursor-pointer"><X className="w-4 h-4 text-red-600" /></Button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                        {newRow && (
                            <tr className="bg-yellow-50">
                                {Object.keys(newRow).filter(f => f !== "tempId" && f !== "_id").map(field => (
                                    <td className="px-4 py-2 border" key={field}>
                                        <Input
                                            className="border rounded px-2 py-1 w-full text-sm"
                                            value={(newRow as any)[field]}
                                            onChange={e => setNewRow({ ...newRow, [field]: e.target.value })}
                                        />
                                    </td>
                                ))}
                                <td className="px-2 py-2 border">
                                    <div className="flex ">
                                        <Button size="icon" variant="ghost" onClick={saveAdd} className="cursor-pointer">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </Button>
                                        <Button size="icon" variant="ghost" onClick={() => setNewRow(null)} className="cursor-pointer">
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
