"use client"

import * as React from "react";
import { useState } from "react"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar";

import { MoreHorizontal } from "lucide-react"
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils"
import { format } from "date-fns";

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
    form: {
        description: string
        classification: string
        status: string
        natureOfException: string
        auditFinding: string
        reportingDepartment: string
        reportingEmployee: string
        supportDocs: string
        concernDepartment: string
        supplier: string
        customerDepartment: string

    }
    handleChange: (field: string, value: string) => void
    handleSubmit: (e: React.FormEvent) => void
    onClose: () => void
    isPending: boolean
}

export default function IncidentModal({
    form,
    handleChange,
    handleSubmit,
    onClose,
    isPending,
}: Props) {
    const [purchaseModule, setPurchaseModule] = React.useState("Imported");
    const [selected, setSelected] = React.useState("supplier");
    const [similarNC, setSimilarNC] = React.useState(false);
    const [date, setDate] = React.useState<Date>();
    const [open, setOpen] = useState(false)

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
                            <SelectItem value="Major Non-Conformity">
                                Major Non-Conformity
                            </SelectItem>
                            <SelectItem value="Minor Non-Conformity">
                                Minor Non-Conformity
                            </SelectItem>
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
                    value={form.supportDocs}
                    onChange={(e) => handleChange("supportDocs", e.target.value)}
                    placeholder="Add description or list of support documents..."
                    rows={4}
                />
            </div>

            {/* Departments Affected */}
            <div className="space-y-2 my-6">
                <Label>Departments Affected</Label>
                <div className="grid grid-cols-2 gap-2">
                    {[
                        "President",
                        "Human Resource and Admin",
                        "Logistics",
                        "Purchasing",
                        "Business/Product Development",
                        "Pharma Business Unit",
                        "Audit/Finance & Accounting",
                    ].map((dept) => (
                        <Label
                            key={dept}
                            className="flex items-center space-x-2 cursor-pointer font-normal"
                        >
                            <Checkbox
                                checked={form.concernDepartment === dept}
                                onCheckedChange={() =>
                                    handleChange("concernDepartment", dept)
                                }
                            />
                            <span className="text-sm">{dept}</span>
                        </Label>
                    ))}
                </div>
            </div>

            {/* Other Fields */}
            <div className="grid grid-cols-2 gap-4">
                {/* Type */}
                <div className="space-y-2 w-full">
                    <Label htmlFor="role">Select Type</Label>
                    <Select
                        defaultValue="supplier"
                        onValueChange={(val) => setSelected(val)}
                    >
                        <SelectTrigger id="role" className="w-full">
                            <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="supplier">Supplier</SelectItem>
                            <SelectItem value="customer">Customer</SelectItem>
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
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                className="w-[300px]"
                                mode="single"
                                selected={date}
                                onSelect={setDate}
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

            {/* Supplier Name */}
            <div className="space-y-2">
                <Label htmlFor="input">
                    {selected === "supplier"
                        ? "Supplier Name"
                        : selected === "customer"
                            ? "Customer Name"
                            : "Department Name"}
                </Label>
                <Input
                    id="input"
                    type="text"
                    placeholder={`Enter ${selected} name`}
                />
            </div>

            <div className="my-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Radio Group */}
                <div className="p-4 border rounded-lg w-full bg-white">
                    <Label className="mb-4 ">
                        Module of Purchase
                    </Label>
                    <RadioGroup
                        defaultValue="Imported"
                        value={purchaseModule}
                        onValueChange={setPurchaseModule}
                        className="flex flex-row gap-12  "
                    >
                        <div className="flex items-center space-x-2 text-">
                            <RadioGroupItem value="Imported" id="imported" />
                            <Label htmlFor="imported" className="font-normal">Imported</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Local" id="local" />
                            <Label htmlFor="local" className="font-normal">Local</Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Checkbox */}
                <div className="p-4  w-full  flex items-center space-x-2">
                    <Checkbox
                        id="similar-nc"
                        checked={similarNC}
                        onCheckedChange={(checked) => setSimilarNC(!!checked)}
                    />
                    <Label htmlFor="similar-nc">
                        Similar NC Exist or Could Potentially Occur
                    </Label>
                </div>
            </div>

            {/* Type of Delivery */}
            <div className="p-4 border rounded-lg w-full bg-white">
                <Label className="mb-4 ">Type of Delivery</Label>
                <RadioGroup defaultValue="indent" className="flex flex-row gap-12 ">
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

            {/* Status */}
            {/* <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                    value={form.status}
                    onValueChange={(value) => handleChange("status", value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Open">Open</SelectItem>
                        <SelectItem value="Ongoing">Ongoing</SelectItem>
                        <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                </Select>
            </div> */}

            <DialogFooter>
                <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                    {isPending ? "Saving..." : "Submit"}
                </Button>
            </DialogFooter>
        </form>
    )
}
