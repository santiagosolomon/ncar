//incidentsModal/incidentModal.tsx

"use client"

import * as React from "react"
import { useState, useEffect } from "react"

import { useAddIncident, useUpdateIncident } from "@/hooks/useIncidentQueries"

import { DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"

import { MoreHorizontal } from "lucide-react"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { format, set } from "date-fns"

import { IncidentForm } from "@/types/incidentModal"   // ✅ use shared type
import { IncidentDetails } from "@/types/incidentDetails"
import { IncidentIssues } from "@/types/incidentIssues"
import { IncidentActions } from "@/types/IncidentActions"

import { IncidentDetailsDrawer } from "@/features/incidentsDrawer/components/IncidentDetails"
import { IncidentIssuesDrawer } from "@/features/incidentsDrawer/components/IncidentIssues"
import { IncidentActionsDrawer } from "@/features/incidentsDrawer/components/IncidentActions"
import { IncidentEvaluationDrawer } from "@/features/incidentsDrawer/components/IncidentEvaluation"

import { is } from "date-fns/locale"
import { IncidentEvaluation } from "@/types/IncidentEvaluation"


const departments = [
    { code: "01", name: "PRESIDENT" },
    { code: "40", name: "HUMAN RESOURCE AND ADMIN" },
    { code: "20", name: "LOGISTICS" },
    { code: "30", name: "PURCHASING" },
    { code: "41", name: "BUSINESS/PRODUCT DEVELOPMENT" },
    { code: "42", name: "PHARMA BUSINESS UNIT" },
    { code: "50", name: "AUDIT/FINANCE & ACCOUNTING" },
    { code: "34", name: "MANAGEMENT INFORMATION SYSTEM" },
    { code: "12", name: "INTERNATIONAL TRADE" },
    { code: "44", name: "CHIEF EXECUTIVE OFFICER" },
    { code: "33", name: "TECHNICAL SERVICES DEPARTMENT" },
    { code: "10", name: "DEMAND / SALES" },
    { code: "09", name: "QMS/IQA" },
    { code: "81", name: "GENERAL SERVICES DEPARTMENT" },
    { code: "31", name: "SUPPLY AND IMPORTS" },
    { code: "11", name: "MANAGEMENT COMMITTEE" },
    { code: "89", name: "NCAR GROUP" },
    { code: "87", name: "CUSTOMER SERVICE" },
    { code: "86", name: "PC / HC BUSINESS UNIT" },
    { code: "90", name: "INTERNAL HALAL COMMITTEE" },
]

interface Props {
    onClose: () => void
    form: IncidentForm
    setForm: React.Dispatch<React.SetStateAction<IncidentForm>>
    editingId: string
    defaultForm: IncidentForm
    // initialData?: IncidentForm & { _id: string }  // ✅ use shared type
}

export default function IncidentModal({ onClose, form, setForm, editingId, defaultForm }: Props) {
    const [open, setOpen] = useState(false)

    const { mutate: addIncident, isPending: isAdding } = useAddIncident()
    const { mutate: updateIncident, isPending: isUpdating } = useUpdateIncident()

    const handleChange = (field: keyof IncidentForm, value: any) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    // ✅ update incidentDetails directly
    const setIncidentDetails = (updater: (prev: IncidentDetails[]) => IncidentDetails[]) => {
        setForm(prev => ({ ...prev, incidentDetails: updater(prev.incidentDetails) }))
    }
    const setIncidentIssues = (updater: (prev: IncidentIssues[]) => IncidentIssues[]) => {
        setForm(prev => ({ ...prev, incidentIssues: updater(prev.incidentIssues) }))
    }
    const setIncidentActions = (updater: (prev: IncidentActions[]) => IncidentActions[]) => {
        setForm(prev => ({ ...prev, incidentActions: updater(prev.incidentActions) }))
    }
    const setIncidentEvaluation = (updater: (prev: IncidentEvaluation[]) => IncidentEvaluation[]) => {
        setForm(prev => ({ ...prev, incidentEvaluation: updater(prev.incidentEvaluation) }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const payload = { ...form }
        if (editingId) {
            updateIncident(
                { id: editingId, data: payload },
                { onSuccess: () => { setForm(defaultForm); onClose() } }
            )
        } else {
            addIncident(
                payload,
                { onSuccess: () => { setForm(defaultForm); onClose() } }
            )
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Reporting Details */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="reportingDepartment">Reporting Department</Label>
                    <div className="flex items-center gap-2">
                        <Input
                            id="reportingDepartment"
                            value={form.reportingDepartment}
                            onChange={(e) => handleChange("reportingDepartment", e.target.value)}
                            placeholder="e.g. Logistics"
                        />
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-0">
                                <Command>
                                    <CommandInput placeholder="Search department..." />
                                    <CommandEmpty>No department found.</CommandEmpty>
                                    <CommandList className="max-h-60 overflow-y-auto">
                                        <CommandGroup>
                                            {departments.map((dept) => (
                                                <CommandItem
                                                    key={dept.code}
                                                    onSelect={() => {
                                                        handleChange("reportingDepartment", `${dept.code} - ${dept.name}`)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <span className="font-mono text-xs w-10">{dept.code}</span>
                                                    <span>{dept.name}</span>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="reportingEmployee">Reporting Employee</Label>
                    <Input
                        id="reportingEmployee"
                        value={form.reportingEmployee}
                        onChange={(e) => handleChange("reportingEmployee", e.target.value)}
                        placeholder="Employee name"
                    />
                </div>

                {/* Nature of Exception */}
                <div className="space-y-2 w-full">
                    <Label htmlFor="natureOfException">Nature of Exception</Label>
                    <Select
                        value={form.natureOfException}
                        onValueChange={(value) => handleChange("natureOfException", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select exception type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Internal Incident">Internal Incident</SelectItem>
                            <SelectItem value="External Incident">External Incident</SelectItem>
                            <SelectItem value="Customer Complaint/Feedback">
                                Customer Complaint/Feedback
                            </SelectItem>
                            <SelectItem value="Internal Audit">Internal Audit</SelectItem>
                            <SelectItem value="External Audit">External Audit</SelectItem>
                            <SelectItem value="Balanced Scorecard Related">
                                Balanced Scorecard Related
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Audit Findings */}
                <div className="space-y-2 w-full">
                    <Label htmlFor="auditFinding">Audit Finding</Label>
                    <Select
                        value={form.auditFinding}
                        onValueChange={(value) => handleChange("auditFinding", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select audit finding" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Major Non-Conformity">Major Non-Conformity</SelectItem>
                            <SelectItem value="Minor Non-Conformity">Minor Non-Conformity</SelectItem>
                            <SelectItem value="Observations for Improvement">
                                Observations for Improvement
                            </SelectItem>
                            <SelectItem value="Potential Non-Conformity">
                                Potential Non-Conformity
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Description/Support Documents */}
            <div className="space-y-2">
                <Label htmlFor="supportDocs">Description / Support Documents</Label>
                <Textarea
                    id="supportDocs"
                    value={form.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Add description or list of support documents..."
                    rows={4}
                />
            </div>

            {/* Other Fields */}
            <div className="grid grid-cols-2 gap-4">
                {/* Type */}
                <div className="space-y-2 w-full">
                    <Label htmlFor="role">Select Type</Label>
                    <Select
                        value={form.concernType}
                        onValueChange={(value) => {
                            handleChange("concernType", value as 'supplier' | 'customer' | 'department');
                            handleChange("concernName", "");
                        }}
                    >
                        <SelectTrigger id="role" className="w-full">
                            <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="customer">Customer</SelectItem>
                            <SelectItem value="supplier">Supplier</SelectItem>
                            <SelectItem value="department">Department</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {/* Date of Incident */}
                <div className="w-full">
                    <label className="block text-sm font-medium mb-2">Date of Incident</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !form.date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {form.date ? format(form.date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="w-[300px]"
                                mode="single"
                                selected={form.date}
                                onSelect={(d) => handleChange("date", d ?? undefined)}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* Customer/Department */}
            <div className="space-y-2 w-full">
                <Label htmlFor="customerDepartment">Customer/Department</Label>
                <Input
                    id="customerDepartment"
                    value={form.customerDepartment}
                    onChange={(e) => handleChange("customerDepartment", e.target.value)}
                />
            </div>

            {/* Supplier/Customer/Department Name */}
            <div className="space-y-2">
                <Label htmlFor="concernName">
                    {form.concernType === "supplier"
                        ? "Supplier Name"
                        : form.concernType === "customer"
                            ? "Customer Name"
                            : "Department Name"}
                </Label>
                <Input
                    id="concernName"
                    type="text"
                    placeholder={`Enter ${form.concernType} name`}
                    value={form.concernName}
                    onChange={(e) => handleChange("concernName", e.target.value)}
                />
            </div>

            {/* Radio Group */}
            <div className="p-4 border rounded-lg w-full bg-white">
                <Label className="mb-4 ">Module of Purchase</Label>
                <RadioGroup
                    value={form.moduleOfPurchase}
                    onValueChange={(value) => handleChange("moduleOfPurchase", value as 'Imported' | 'Local')}
                    className="flex flex-row gap-12"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Imported" id="imported" />
                        <Label htmlFor="imported" className="font-normal">
                            Imported
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Local" id="local" />
                        <Label htmlFor="local" className="font-normal">
                            Local
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {/* Delivery Type */}
            <div className="p-4 border rounded-lg w-full bg-white mb-8">
                <Label className="mb-4 ">Type of Delivery</Label>
                <RadioGroup
                    value={form.typeOfDelivery}
                    onValueChange={(value) => handleChange("typeOfDelivery", value)}
                    className="flex flex-row gap-12"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="indent" id="indent" />
                        <Label htmlFor="indent" className="font-normal">
                            Indent
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exstock" id="exstock" />
                        <Label htmlFor="exstock" className="font-normal">
                            ExStock
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="forward" id="forward" />
                        <Label htmlFor="forward" className="font-normal">
                            Forward
                        </Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex gap-2">
                <IncidentDetailsDrawer details={form.incidentDetails} setDetails={setIncidentDetails} />
                <IncidentIssuesDrawer details={form.incidentIssues} setDetails={setIncidentIssues} />
                <IncidentActionsDrawer details={form.incidentActions} setDetails={setIncidentActions} />
                <IncidentEvaluationDrawer details={form.incidentEvaluation} setDetails={setIncidentEvaluation} />
            </div>

            {/* Form Actions */}
            <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose} className="cursor-pointer">
                    Cancel
                </Button>
                <Button type="submit" disabled={isAdding || isUpdating} className="cursor-pointer">
                    {isAdding || isUpdating ? "Saving..." : "Submit"}
                </Button>
            </DialogFooter>
        </form>
    )
}
