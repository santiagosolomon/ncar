// "use client"

// import { useState } from "react"
// import { IncidentAnalysis } from "@/types/IncidentActions"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu"
// import { MoreHorizontal, X, Check, Trash2, Pencil, Plus } from "lucide-react"

// interface Props {
//   title: string
//   details: IncidentAnalysis[]
//   setDetails: (updater: (prev: IncidentAnalysis[]) => IncidentAnalysis[]) => void
// }

// export function AnalysisTable({ title, details, setDetails }: Props) {
//   const [editingIdx, setEditingIdx] = useState<number | null>(null)
//   const [deleteConfirmIdx, setDeleteConfirmIdx] = useState<number | null>(null)
//   const [newRow, setNewRow] = useState<IncidentAnalysis | null>(null)
//   const [draftRow, setDraftRow] = useState<IncidentAnalysis | null>(null)

//   const startAdd = () => {
//     setNewRow({
//       why: "",
//       probableRootCause: "",
//       counterMeasure: "",
//       who: "",
//       when: "",
//       recurrence: ""
//     })
//   }

//   const saveAdd = () => {
//     if (newRow) {
//       setDetails(prev => [...prev, newRow])
//       setNewRow(null)
//     }
//   }

//   const startEdit = (row: IncidentAnalysis, idx: number) => {
//     setEditingIdx(idx)
//     setDraftRow({ ...row })
//   }

//   const saveEdit = (idx: number) => {
//     if (draftRow) {
//       setDetails(prev => prev.map((d, i) => (i === idx ? draftRow : d)))
//       setEditingIdx(null)
//       setDraftRow(null)
//     }
//   }

//   const cancelEdit = () => {
//     setEditingIdx(null)
//     setDraftRow(null)
//   }

//   const deleteRow = (idx: number) => {
//     setDetails(prev => prev.filter((_, i) => i !== idx))
//     setDeleteConfirmIdx(null)
//   }

//   const renderCell = (row: IncidentAnalysis, field: keyof IncidentAnalysis, idx: number) => {
//     const isEditing = editingIdx === idx
//     if (!isEditing) return (row as any)[field]
//     return (
//       <Input
//         type="text"
//         className="border rounded px-2 py-1 w-full text-sm"
//         value={(draftRow as any)[field] || ""}
//         onChange={e => setDraftRow({ ...draftRow!, [field]: e.target.value })}
//       />
//     )
//   }

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="font-semibold">{title}</h3>
//         <Button
//           size="sm"
//           variant="outline"
//           className="cursor-pointer"
//           onClick={startAdd}
//           disabled={!!newRow}
//         >
//           <Plus className="w-4 h-4" /> Add
//         </Button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border text-sm text-left">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-2 py-2 border">Why?</th>
//               <th className="px-2 py-2 border">Probable Root Cause</th>
//               <th className="px-2 py-2 border">Counter Measure</th>
//               <th className="px-2 py-2 border">Who</th>
//               <th className="px-2 py-2 border">When</th>
//               <th className="px-2 py-2 border">Recurrence</th>
//               <th className="px-2 py-2 border w-14">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {details.map((row, idx) => {
//               const isEditing = editingIdx === idx
//               const isDeleting = deleteConfirmIdx === idx

//               return (
//                 <tr key={idx} className="odd:bg-white even:bg-gray-50">
//                   <td className="px-2 py-2 border">{renderCell(row, "why", idx)}</td>
//                   <td className="px-2 py-2 border">{renderCell(row, "probableRootCause", idx)}</td>
//                   <td className="px-2 py-2 border">{renderCell(row, "counterMeasure", idx)}</td>
//                   <td className="px-2 py-2 border">{renderCell(row, "who", idx)}</td>
//                   <td className="px-2 py-2 border">{renderCell(row, "when", idx)}</td>
//                   <td className="px-2 py-2 border">{renderCell(row, "recurrence", idx)}</td>
//                   <td className="px-2 py-2 border w-14">
//                     {!isEditing && !isDeleting && (
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button size="icon" variant="ghost" className="cursor-pointer">
//                             <MoreHorizontal className="w-4 h-4" />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                           <DropdownMenuItem className="cursor-pointer" onClick={() => startEdit(row, idx)}>
//                             <Pencil className="w-4 h-4 mr-2" /> Edit
//                           </DropdownMenuItem>
//                           <DropdownMenuItem className="cursor-pointer" onClick={() => setDeleteConfirmIdx(idx)}>
//                             <Trash2 className="w-4 h-4 mr-2" /> Delete
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     )}

//                     {isEditing && (
//                       <div className="flex">
//                         <Button className="cursor-pointer" size="icon" variant="ghost" onClick={() => saveEdit(idx)}>
//                           <Check className="w-4 h-4 text-green-600" />
//                         </Button>
//                         <Button className="cursor-pointer" size="icon" variant="ghost" onClick={cancelEdit}>
//                           <X className="w-4 h-4 text-red-600" />
//                         </Button>
//                       </div>
//                     )}

//                     {isDeleting && (
//                       <div className="flex">
//                         <Button
//                           className="cursor-pointer"
//                           size="icon"
//                           variant="ghost"
//                           onClick={() => deleteRow(idx)}
//                         >
//                           <Check className="w-4 h-4 text-green-600" />
//                         </Button>
//                         <Button
//                           className="cursor-pointer"
//                           size="icon"
//                           variant="ghost"
//                           onClick={() => setDeleteConfirmIdx(null)}
//                         >
//                           <X className="w-4 h-4 text-red-600" />
//                         </Button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               )
//             })}

//             {newRow && (
//               <tr className="bg-yellow-50">
//                 {(["why", "probableRootCause", "counterMeasure", "who", "when", "recurrence"] as (keyof IncidentAnalysis)[])
//                   .map((field) => (
//                     <td key={field} className="px-2 py-2 border">
//                       <Input
//                         className="border rounded px-2 py-1 w-full text-sm"
//                         value={(newRow as any)[field] || ""}
//                         onChange={(e) => setNewRow({ ...newRow, [field]: e.target.value })}
//                       />
//                     </td>
//                   ))}
//                 <td className="px-2 py-2 border">
//                   <div className="flex">
//                     <Button className="cursor-pointer" size="icon" variant="ghost" onClick={saveAdd}>
//                       <Check className="w-4 h-4 text-green-600" />
//                     </Button>
//                     <Button className="cursor-pointer" size="icon" variant="ghost" onClick={() => setNewRow(null)}>
//                       <X className="w-4 h-4 text-red-600" />
//                     </Button>
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
