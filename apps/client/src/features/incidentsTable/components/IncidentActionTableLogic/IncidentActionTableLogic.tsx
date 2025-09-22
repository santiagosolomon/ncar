// features/incidentsTable/components/IncidentDetailsTableLogic/IncidentDetailsTableLogic.tsx

"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { IncidentDetails } from "@/types/incidentDetails"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, X, Check, Save, Trash2, Pencil, Plus } from "lucide-react"
import { IncidentActionItem } from "@/types/IncidentActions"

import { normalizeRows } from "@/utils/normalizeRows";

interface Props {
    title: string
    details: IncidentActionItem[]
    setDetails: (updater: (prev: IncidentActionItem[]) => IncidentActionItem[]) => void
}

export function IncidentActionTableLogic({ details, setDetails, title }: Props) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
    const [newRow, setNewRow] = useState<IncidentActionItem | null>(null)
    const [draftRow, setDraftRow] = useState<IncidentActionItem | null>(null)


    useEffect(() => {
        setDetails((prev) => normalizeRows(prev));
    }, []);

    const startAdd = () => {
        setNewRow({
            tempId: crypto.randomUUID(), // ✅ always unique key
            actionTaken: "",
            personResponsible: "",
            timeTable: new Date(),
            followUpDate: new Date(),
            status: "open",

        })
    }

    const saveAdd = () => {
        if (newRow) {
            setDetails(prev => [...prev, newRow]) // ✅ already has tempId
            setNewRow(null)
        }
    }

    const startEdit = (row: IncidentActionItem) => {
        const id = row._id || row.tempId!
        setEditingId(id)
        setDraftRow(row)
    }

    const saveEdit = () => {
        if (draftRow) {
            const id = draftRow._id || draftRow.tempId
            setDetails(prev => prev.map(d => (d._id || d.tempId) === id ? draftRow : d))
            setEditingId(null)
            setDraftRow(null)
        }
    }

    const cancelEdit = () => {
        setEditingId(null)
        setDraftRow(null)
    }

    const deleteRow = (id: string) => {
        setDetails(prev =>
            prev.filter(d => d._id !== id && d.tempId !== id) // ✅ handles both cases
        )
        setDeleteConfirmId(null)
    }

    const renderCell = (row: IncidentActionItem, field: keyof IncidentActionItem) => {
        const isEditing = editingId === (row._id || row.tempId)
        const value = (row as any)[field]

        // Not in edit mode → just display values
        if (!isEditing) {
            if (value instanceof Date) {
                return format(value, "yyyy-MM-dd")
            }
            return value
        }

        // ✅ In edit mode → special handling for date fields
        if (field === "timeTable" || field === "followUpDate") {
            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {draftRow?.[field]
                                ? format(draftRow[field] as Date, "yyyy-MM-dd")
                                : "Pick a date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="p-0">
                        <Calendar
                            mode="single"
                            selected={draftRow?.[field] as Date}
                            onSelect={date =>
                                setDraftRow(prev => ({ ...prev, [field]: date ?? new Date() }))
                            }
                        />
                    </PopoverContent>
                </Popover>
            )
        }

        // ✅ Default → text input
        return (
            <Input
                className="border rounded px-2 py-1 w-full text-sm"
                value={(draftRow as any)?.[field] ?? ""}
                onChange={e =>
                    setDraftRow(prev => ({ ...prev, [field]: e.target.value }))
                }
            />
        )
    }

    return (
        <div className="">
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
                            <th className="px-2 py-2 border">Action Taken</th>
                            <th className="px-2 py-2 border">Person Responsible</th>
                            <th className="px-2 py-2 border">Time Table</th>
                            <th className="px-2 py-2 border">Follow Up Date</th>
                            <th className="px-2 py-2 border">Status</th>
                            <th className="px-2 py-2 border w-14">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map(row => {
                            const isEditing = editingId === (row._id || row.tempId)
                            const isDeleting = deleteConfirmId === (row._id || row.tempId)
                            return (
                                <tr
                                    key={row._id || row.tempId || `row-${row.actionTaken}-${row.personResponsible}`}
                                    className="odd:bg-white even:bg-gray-50"
                                >
                                    <td className="px-2 py-2 border">{renderCell(row, "actionTaken")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "personResponsible")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "timeTable")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "followUpDate")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "status")}</td>
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
                                <td className="px-2 py-2 border">
                                    <Input
                                        value={newRow.actionTaken}
                                        onChange={e => setNewRow({ ...newRow, actionTaken: e.target.value })}
                                    />
                                </td>
                                <td className="px-2 py-2 border">
                                    <Input
                                        value={newRow.personResponsible}
                                        onChange={e => setNewRow({ ...newRow, personResponsible: e.target.value })}
                                    />
                                </td>
                                <td className="px-2 py-2 border">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {newRow.timeTable ? format(newRow.timeTable, "yyyy-MM-dd") : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent align="start" className="p-0">
                                            <Calendar
                                                mode="single"
                                                selected={newRow.timeTable}
                                                onSelect={date => setNewRow({ ...newRow, timeTable: date ?? new Date() })}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </td>
                                <td className="px-2 py-2 border">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {newRow.followUpDate ? format(newRow.followUpDate, "yyyy-MM-dd") : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent align="start" className="p-0">
                                            <Calendar
                                                mode="single"
                                                selected={newRow.followUpDate}
                                                onSelect={date => setNewRow({ ...newRow, followUpDate: date ?? new Date() })}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </td>
                                <td className="px-2 py-2 border">
                                    <Input
                                        value={newRow.status}
                                        onChange={e => setNewRow({ ...newRow, status: e.target.value })}
                                    />
                                </td>
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

