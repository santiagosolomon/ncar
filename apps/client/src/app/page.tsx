//app/page.tsx

"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import useSWR from "swr"

import IncidentMainTable from "@/features/incidents/components/IncidentMainTable"
import IncidentModal from "@/features/incidentsModal/components/IncidentModal"
import IncidentsHeader from "@/features/incidentsHeader/incidentsHeader"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"

import { useIncidents } from "@/hooks/useIncidentQueries"
import { IncidentForm } from "@/types/incidentModal"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useReactToPrint } from "react-to-print"
import { PrintWrapper } from "@/components/PrintWrapper"


// 🔹 fetcher with cookies
export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, { credentials: "include" })

    if (res.status === 401) {
      // No valid cookie -> redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/login"
      }
      return null // 🔹 return null instead of throwing
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    return res.json()
  } catch (err) {
    console.error("Fetcher error:", err)
    return null // 🔹 safe fallback
  }
}

export type Organization = "PTC" | "GICC" | "ALL";

const defaultForm: IncidentForm = {
  refNo: 0,
  dateReported: undefined,
  description: "",
  natureOfException: "",
  auditFinding: "",
  reportingDepartment: "",
  reportingEmployee: "",
  concernType: "supplier",
  concernName: "",
  customerDepartment: "",
  moduleOfPurchase: "Imported",
  typeOfDelivery: "indent",
  date: undefined,
  incidentDetails: [],
  incidentIssues: [],
  incidentIssuesSelection: {},
  incidentActions: [{
    tempId: crypto.randomUUID(),
    correction: [],
    corrective: [],
    occurence: "",
    consequence: "",
    rootCause: "",
    analysis: []
  }],
  incidentEvaluation: [
    {
      tempId: crypto.randomUUID(),
      effectiveness: [],
      documentation: []
    }
  ],

  organization: "PTC",
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // 🆕 org filter state
  const [selectedOrg, setSelectedOrg] = useState<"PTC" | "GICC" | "ALL">("ALL")

  const [isOpen, setIsOpen] = useState(false)
  const [editingIncident, setEditingIncident] = useState<(IncidentForm & { _id: string }) | null>(null)

  const [form, setForm] = useState<IncidentForm>(defaultForm)


  // 🚀 fetch user from /me
  const { data: me, error: meError, isLoading: meLoading } = useSWR("http://localhost:5000/api/auth/me", fetcher)

  const role = me?.user?.role ?? "user"
  const userOrg = me?.user?.organization ?? "PTC"

  const componentRef = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  // ...existing code...

  const handlePrint = useCallback(() => {
    setIsPrinting(true);
    const printContent = componentRef.current;

    if (!printContent) {
      console.error('Print content not ready');
      setIsPrinting(false);
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      console.error('Could not open print window');
      setIsPrinting(false);
      return;
    }

    // Store the current active element before printing
    const previousActiveElement = document.activeElement;

    // Write the print content to the new window
    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print Report</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            color: black;
            background: white;
          }
          * {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        </style>
      </head>
      <body>
        ${printContent.outerHTML}
      </body>
    </html>
  `);

    printWindow.document.close();

    const cleanup = () => {
      setIsPrinting(false);
      // Restore focus to the previous active element
      if (previousActiveElement && 'focus' in previousActiveElement) {
        (previousActiveElement as HTMLElement).focus();
      }
      // Force React to update the modal's focus trap
      window.dispatchEvent(new Event('focus'));
    };

    // Reset printing state if window is closed without printing
    const checkWindowClosed = setInterval(() => {
      if (printWindow.closed) {
        clearInterval(checkWindowClosed);
        cleanup();
      }
    }, 1000);

    // Handle print completion
    printWindow.onload = () => {
      printWindow.print();
      // Reset state after print dialog opens
      setIsPrinting(false);
    };

    // Handle after print
    printWindow.onafterprint = () => {
      printWindow.close();
      clearInterval(checkWindowClosed);
      cleanup();
    };

    // Cleanup interval when component unmounts
    return () => {
      clearInterval(checkWindowClosed);
      cleanup();
    };
  }, []);

  // 🆕 set org automatically for normal users
  useEffect(() => {
    if (!meLoading && !meError) {
      if (role !== "admin") {
        if (userOrg === "ALL") {
          // keep ALL users free to switch between PTC, GICC, ALL
          setSelectedOrg("ALL")
        } else if (userOrg) {
          // lock normal users to their own org
          setSelectedOrg(userOrg)
        }
      }
    }
  }, [role, userOrg, meLoading, meError])


  // fetch incidents based on selected org
  const { data: incidents, isLoading, isError } = useIncidents(currentPage, itemsPerPage, selectedOrg)

  const handleChange = (field: keyof IncidentForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleRowClick = (incident: IncidentForm & { _id: string }) => {
    setEditingIncident(incident)
    setForm({
      ...incident,
      date: incident.date ? new Date(incident.date) : undefined,
      organization: incident.organization,
    })
    setIsOpen(true)
  }

  const handleCreate = () => {
    if (editingIncident) {
      setForm(defaultForm)
    }
    setEditingIncident(null)
    setIsOpen(true)
  }



  const handleClose = () => {
    setForm(defaultForm)
    setEditingIncident(null)
    setIsOpen(false)

  }

  if (meLoading) return <p>Loading user...</p>
  if (meError) return <p className="text-red-500">Failed to fetch user info</p>

  return (
    <div className="h-screen flex flex-col dark:bg-sky-950 dark:text-white">
      {/* Print Container */}
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          {editingIncident && <PrintWrapper incident={form} />}
        </div>
      </div>
      <div>
        {/* 📝 Header (now gets role + org from /me) */}
        <IncidentsHeader selectedOrg={selectedOrg} onSelectOrg={setSelectedOrg} role={role} userOrg={userOrg} email={me?.user?.email ?? ""} />
      </div>

      {/* 📋 Main Table */}
      <div className="p-6 overflow-y-auto flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-red-600 text-lg">Incident Reports</h1>

          {/* + Create Button & Modal */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* Only show Create button based on condition */}
            {!((role === "admin" || userOrg === "ALL") && selectedOrg === "ALL") && (
              <DialogTrigger asChild>
                <Button className="cursor-pointer" onClick={handleCreate}>+ Create</Button>
              </DialogTrigger>
            )}

            <DialogContent className="max-h-[700px] 2xl:max-h-[750px] sm:max-w-[1100px] max-w-[600px] overflow-y-auto dark:bg-sky-950" onCloseAutoFocus={(e) => e.preventDefault()}> {/* onCloseAutoFocus={(e) => e.preventDefault()} -- will help to avoid moving to top after closing the modal*/}
              <DialogHeader>
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <DialogTitle>{editingIncident ? "Edit Incident Report" : "File Incident Report"}</DialogTitle>
                    <div className="text-[0.84rem] text-gray-400 italic font-semibold flex items-center gap-2">
                      {editingIncident ? `(Ref No: ${form.refNo})` : null}
                      {selectedOrg === "ALL" && (<p className="text-[13px] font-medium text-gray-500 mb-[0.10rem]"> - {form.organization}</p>)}
                    </div>

                  </div>
                  <div className="mr-7 mt-2 flex gap-2 items-center">
                    <Popover>
                      <PopoverTrigger asChild className="h-[34px]">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "min-w-[140px] justify-start text-left font-normal cursor-pointer ",
                            !form.dateReported && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                          <span className="whitespace-nowrap">
                            {form.dateReported ? format(form.dateReported, "PPP") : <span>Filing Date</span>}
                          </span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          className="w-[300px]"
                          mode="single"
                          selected={form.dateReported}
                          onSelect={(d) => handleChange("dateReported", d ?? undefined)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {editingIncident && (
                      <div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrint}
                          disabled={isPrinting || !componentRef.current}
                          className="h-[34px]"
                        >
                          {isPrinting ? 'Preparing...' : 'Print'}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-4">
                <IncidentModal
                  onClose={handleClose}
                  // 🆕 always pass selectedOrg into the form
                  form={{
                    ...form,
                    organization: editingIncident ? form.organization : selectedOrg,
                  }}
                  setForm={setForm}
                  editingId={editingIncident?._id}
                  defaultForm={defaultForm}
                />
              </div>
            </DialogContent>
          </Dialog>


        </div>

        {/* Table incident list from backend */}
        {isLoading && <p>Loading incidents...</p>}
        {isError && <p className="text-red-500">Failed to load incidents</p>}
        {incidents && (
          <IncidentMainTable
            editingIncident={editingIncident}
            data={incidents.data}
            onRowClick={handleRowClick}
            currentPage={incidents.page}
            totalPages={incidents.totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => {
              if (page >= 1 && page <= incidents.totalPages) {
                setCurrentPage(page)
              }
            }}
            onItemsPerPageChange={(val) => {
              setItemsPerPage(val)
              setCurrentPage(1)
            }}
          />
        )}
      </div>
    </div>
  )
}
