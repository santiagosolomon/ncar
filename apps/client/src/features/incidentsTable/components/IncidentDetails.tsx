// features/incidentsTable/components/IncidentDetails.tsx

"use client"

import { useState } from "react"
import { IncidentDetails } from "@/types/incidentDetails"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, X, Check, Save, Trash2, Pencil, Plus } from "lucide-react"

interface Props {
    details: IncidentDetails[]
    setDetails: (updater: (prev: IncidentDetails[]) => IncidentDetails[]) => void
}

export function IncidentDetailsTable({ details, setDetails }: Props) {
    const [editingId, setEditingId] = useState<string | null>(null)
    const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
    const [newRow, setNewRow] = useState<IncidentDetails | null>(null)
    const [draftRow, setDraftRow] = useState<IncidentDetails | null>(null)

    const startAdd = () => {
        setNewRow({
            tempId: crypto.randomUUID(), // ✅ always unique key
            type: "",
            deviation: "",
            description: "",
            sku: "",
            details: "",
            outOfTotal: "",
            poNo: "",
            lotNo: "",
            containerNo: "",
            ladingNo: "",

        })
    }

    const saveAdd = () => {
        if (newRow) {
            setDetails(prev => [...prev, newRow]) // ✅ already has tempId
            setNewRow(null)
        }
    }

    const startEdit = (row: IncidentDetails) => {
        setEditingId(row._id || row.tempId!) // ✅ handles both cases
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
        setDetails(prev =>
            prev.filter(d => d._id !== id && d.tempId !== id) // ✅ handles both cases
        )
        setDeleteConfirmId(null)
    }

    const renderCell = (row: IncidentDetails, field: keyof IncidentDetails) => {
        const isEditing = editingId === (row._id || row.tempId)
        if (!isEditing) return (row as any)[field]

        return (
            <input
                className="border rounded px-2 py-1 w-full text-sm"
                value={(draftRow as any)[field] ?? ""}
                onChange={e =>
                    setDraftRow(prev => ({ ...draftRow, [field]: e.target.value }))
                }
            />
        )
    }

    return (
        <div>
            <div className="flex justify-end mb-2">
                <Button size="sm" variant="outline" className="cursor-pointer" onClick={startAdd} disabled={!!newRow}>
                    <Plus className="w-4 h-4" /> Add
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
                            <th className="px-2 py-2 border">Bill of Lading No.</th>
                            <th className="px-2 py-2 border w-14">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map(row => {
                            const isEditing = editingId === (row._id || row.tempId)
                            const isDeleting = deleteConfirmId === (row._id || row.tempId)
                            return (
                                <tr
                                    key={row._id || row.tempId}
                                    className="odd:bg-white even:bg-gray-50"
                                >
                                    <td className="px-2 py-2 border">{renderCell(row, "type")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "deviation")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "description")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "sku")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "details")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "outOfTotal")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "poNo")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "lotNo")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "containerNo")}</td>
                                    <td className="px-2 py-2 border">{renderCell(row, "ladingNo")}</td>
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
                            <tr className="bg-yellow-50">
                                {Object.keys(newRow)
                                    .filter(f => f !== "tempId" && f !== "_id")
                                    .map(field => (
                                        <td key={field} className="px-2 py-2 border">
                                            <Input
                                                className="border rounded px-2 py-1 w-full text-sm"
                                                value={(newRow as any)[field]}
                                                onChange={e =>
                                                    setNewRow({ ...newRow, [field]: e.target.value })
                                                }
                                            />
                                        </td>
                                    ))}
                                <td className="px-2 py-2 border">
                                    <div className="flex">
                                        <Button size="icon" variant="ghost" onClick={saveAdd} className="cursor-pointer">
                                            <Check className="w-4 h-4 text-green-600" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => setNewRow(null)}
                                            className="cursor-pointer"
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










// "use client"

// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { MoreHorizontal, X, Save, Trash2, Pencil, Plus } from "lucide-react"
// import {
//     useIncidents,
//     useAddIncident,
//     useUpdateIncident,
//     useDeleteIncident,
// } from "@/hooks/useIncidentQueries"
// import { useIncidentStore } from "@/store/incidentStore"
// import { IncidentResponse } from "@/types/incidentModal"
// import { IncidentDetails } from "@/types/incidentDetails"

// interface Props {
//     details: IncidentDetails[]
//     setDetails: React.Dispatch<React.SetStateAction<IncidentDetails[]>>
// }

// export function IncidentDetailsTable({ details, setDetails }: Props) {
//     const { data: incidents = [], isLoading } = useIncidents()
//     const addIncident = useAddIncident()
//     const updateIncident = useUpdateIncident()
//     const deleteIncident = useDeleteIncident()

//     const { rowModes, setMode, reset } = useIncidentStore()

//     const [newRow, setNewRow] = useState<IncidentDetails | null>(null)

//     // ---- Row Actions ----
//     const startEdit = (id: string) => setMode(id, "edit")
//     const startDelete = (id: string) => setMode(id, "delete-confirm")
//     const cancel = (id: string) => reset(id)

//     const save = (incident: IncidentResponse) => {
//         updateIncident.mutate(
//             { id: incident._id, data: incident },
//             { onSuccess: () => reset(incident._id) }
//         )
//     }

//     const confirmDelete = (id: string) => {
//         deleteIncident.mutate(id, {
//             onSuccess: () => reset(id),
//         })
//     }

//     const startAdd = () => {
//         setNewRow({

//             type: "",
//             deviation: "",
//             descr: "",
//             sku: "",
//             details: "",
//             outOfTotal: "",
//             poNo: "",
//             lotNo: "",
//             containerNo: "",
//             ladingNo: "",
//         })
//     }
//     const cancelAdd = () => setNewRow(null)
//     const saveAdd = () => {
//         if (newRow) {
//             addIncident.mutate(newRow, {
//                 onSuccess: () => setNewRow(null),
//             })
//         }
//     }

//     const renderCell = (incident: IncidentResponse, field: keyof IncidentResponse) => {
//         const mode = rowModes[incident._id]
//         if (mode === "edit") {
//             return (
//                 <input
//                     className="border rounded px-2 py-1 w-full text-sm"
//                     value={(incident as any)[field] || ""}
//                     onChange={e =>
//                         updateIncident.mutate({
//                             id: incident._id,
//                             data: { ...incident, [field]: e.target.value },
//                         })
//                     }
//                 />
//             )
//         }
//         return (incident as any)[field]
//     }

//     if (isLoading) {
//         return <div className="p-4">Loading incidents...</div>
//     }

//     return (
//         <div>
//             <div className="flex justify-end mb-2">
//                 <Button size="sm" variant="outline" onClick={startAdd} disabled={!!newRow}>
//                     <Plus className="w-4 h-4 " /> Add
//                 </Button>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="min-w-full border text-sm text-left">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th className="px-2 py-2 border">Type</th>
//                             <th className="px-2 py-2 border">Deviation</th>
//                             <th className="px-2 py-2 border">Description</th>
//                             <th className="px-2 py-2 border">SKU</th>
//                             <th className="px-2 py-2 border">Details</th>
//                             <th className="px-2 py-2 border"># Out of Total Product</th>
//                             <th className="px-2 py-2 border">PO No.</th>
//                             <th className="px-2 py-2 border">Lot No.</th>
//                             <th className="px-2 py-2 border">Container No.</th>
//                             <th className="px-2 py-2 border">Bill of Landing No.</th>
//                             <th className="px-2 py-2 border">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {incidents.map(row => {
//                             const mode = rowModes[row._id!] || "view"
//                             return (
//                                 <tr key={row._id} className="odd:bg-white even:bg-gray-50">
//                                     <td className="px-2 py-2 border">{renderCell(row, "type")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "deviation")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "description")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "sku")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "details")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "outOfTotal")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "poNo")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "lotNo")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "containerNo")}</td>
//                                     <td className="px-2 py-2 border">{renderCell(row, "ladingNo")}</td>
//                                     <td className="px-2 py-2 border">
//                                         {mode === "view" && (
//                                             <DropdownMenu>
//                                                 <DropdownMenuTrigger asChild>
//                                                     <Button variant="ghost" size="icon">
//                                                         <MoreHorizontal className="w-4 h-4" />
//                                                     </Button>
//                                                 </DropdownMenuTrigger>
//                                                 <DropdownMenuContent>
//                                                     <DropdownMenuItem onClick={() => startEdit(row._id!)}>
//                                                         <Pencil className="w-4 h-4 mr-2" /> Edit
//                                                     </DropdownMenuItem>
//                                                     <DropdownMenuItem onClick={() => startDelete(row._id!)}>
//                                                         <Trash2 className="w-4 h-4 mr-2" /> Delete
//                                                     </DropdownMenuItem>
//                                                 </DropdownMenuContent>
//                                             </DropdownMenu>
//                                         )}
//                                         {mode === "edit" && (
//                                             <div className="flex gap-2">
//                                                 <Button size="icon" variant="ghost" onClick={() => save(row)}>
//                                                     <Save className="w-4 h-4 text-green-600" />
//                                                 </Button>
//                                                 <Button size="icon" variant="ghost" onClick={() => cancel(row._id!)}>
//                                                     <X className="w-4 h-4 text-red-600" />
//                                                 </Button>
//                                             </div>
//                                         )}
//                                         {mode === "delete-confirm" && (
//                                             <div className="flex gap-2">
//                                                 <Button size="icon" variant="ghost" onClick={() => confirmDelete(row._id!)}>
//                                                     <Trash2 className="w-4 h-4 text-red-600" />
//                                                 </Button>
//                                                 <Button size="icon" variant="ghost" onClick={() => cancel(row._id!)}>
//                                                     <X className="w-4 h-4" />
//                                                 </Button>
//                                             </div>
//                                         )}
//                                     </td>
//                                 </tr>
//                             )
//                         })}

//                         {newRow && (
//                             <tr key="new" className="bg-yellow-50">
//                                 {[
//                                     "type",
//                                     "deviation",
//                                     "description",
//                                     "sku",
//                                     "details",
//                                     "outOfTotal",
//                                     "poNo",
//                                     "lotNo",
//                                     "containerNo",
//                                     "billOfLandingNo",
//                                 ].map(field => (
//                                     <td key={field} className="px-2 py-2 border">
//                                         <input
//                                             className="border rounded px-2 py-1 w-full text-sm"
//                                             value={(newRow as any)[field]}
//                                             onChange={e =>
//                                                 setNewRow({ ...newRow, [field]: e.target.value })
//                                             }
//                                         />
//                                     </td>
//                                 ))}
//                                 <td className="px-2 py-2 border">
//                                     <div className="flex gap-2">
//                                         <Button size="icon" variant="ghost" onClick={saveAdd}>
//                                             <Save className="w-4 h-4 text-green-600" />
//                                         </Button>
//                                         <Button size="icon" variant="ghost" onClick={cancelAdd}>
//                                             <X className="w-4 h-4 text-red-600" />
//                                         </Button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
