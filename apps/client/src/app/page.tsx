//app/page.tsx

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import useSWR from "swr";
import { useDebounce } from "@/hooks/useDebounce";

import IncidentMainTable from "@/features/incidents/components/IncidentMainTable";
import IncidentModal from "@/features/incidentsModal/components/IncidentModal";
import IncidentsHeader from "@/features/incidentsHeader/incidentsHeader";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";

import { useIncidents } from "@/hooks/useIncidentQueries";
import { IncidentForm } from "@/types/incidentModal";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useReactToPrint } from "react-to-print";
import { PrintWrapper } from "@/components/PrintWrapper";

//  fetcher with cookies
export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, { credentials: "include" });

    if (res.status === 401) {
      // No valid cookie -> redirect to login
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      return null; //  return null instead of throwing
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error("Fetcher error:", err);
    return null; //  safe fallback
  }
};

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
  classification: "",
  status: "",
  date: undefined,
  incidentDetails: [],
  incidentIssues: [],
  incidentIssuesSelection: {},
  incidentActions: [
    {
      tempId: crypto.randomUUID(),
      correction: [],
      corrective: [],
      occurence: "",
      consequence: "",
      rootCause: "",
      analysis: [],
    },
  ],
  incidentEvaluation: [
    {
      tempId: crypto.randomUUID(),
      effectiveness: [],
      documentation: [],
    },
  ],

  organization: "PTC",
};

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // org filter state
  const [selectedOrg, setSelectedOrg] = useState<"PTC" | "GICC" | "ALL">("ALL");

  const [isOpen, setIsOpen] = useState(false);
  const [editingIncident, setEditingIncident] = useState<
    (IncidentForm & { _id: string }) | null
  >(null);

  const [form, setForm] = useState<IncidentForm>(defaultForm);
  const [isModalDisabled, setIsModalDisabled] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // Debounce search input

  // fetch user from /me
  const {
    data: me,
    error: meError,
    isLoading: meLoading,
  } = useSWR("http://localhost:5000/api/auth/me", fetcher);

  const role = me?.user?.role ?? "user";
  const userOrg = me?.user?.organization ?? "PTC";

  // Replace the existing handlePrint function
  const [printWindow, setPrintWindow] = useState<Window | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  // ✅ Optimized print handler (memoized)
  const handlePrint = useCallback(() => {
    try {
      if (printWindow) {
        printWindow.close();
        setPrintWindow(null);
      }

      setIsPrinting(true);
      const content = componentRef.current;
      if (!content) return;

      setTimeout(() => {
        const pw = window.open("", "_blank");
        if (!pw) return;
        setPrintWindow(pw);

        pw.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Print Report</title>
              <style>
                @page { size: A4; margin: 20mm; }
                body {
                  font-family: system-ui, -apple-system, sans-serif;
                  line-height: 1.5;
                  color: black;
                  background: white;
                  margin: 0;
                  padding: 20mm;
                }
                * {
                  print-color-adjust: exact !important;
                  -webkit-print-color-adjust: exact !important;
                }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid black; padding: 8px; }
                th { background-color: #f3f4f6 !important; }
              </style>
            </head>
            <body>${content.outerHTML}</body>
          </html>
        `);

        pw.document.close();
        pw.onload = () => {
          pw.focus();
          pw.print();
        };
      }, 100);
    } catch (error) {
      console.error("Print error:", error);
      setIsPrinting(false);
    }
  }, [printWindow]);

  // ✅ Cleanup after print
  useEffect(() => {
    const cleanup = () => {
      if (printWindow) {
        printWindow.close();
        setPrintWindow(null);
      }
      setIsPrinting(false);
    };
    const handleFocus = () => {
      if (printWindow?.closed) cleanup();
    };
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
      cleanup();
    };
  }, [printWindow]);

  //  set org automatically for normal users
  useEffect(() => {
    if (!meLoading && !meError) {
      if (role !== "admin") {
        if (userOrg === "ALL") {
          // keep ALL users free to switch between PTC, GICC, ALL
          setSelectedOrg("ALL");
        } else if (userOrg) {
          // lock normal users to their own org
          setSelectedOrg(userOrg);
        }
      }
    }
  }, [role, userOrg, meLoading, meError]);

  // fetch incidents based on selected org
  // ✅ Fetch incidents with debounced search
  const {
    data: incidents,
    isLoading,
    isError,
  } = useIncidents(currentPage, itemsPerPage, selectedOrg, debouncedSearch);

  const handleChange = (field: keyof IncidentForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ Memoized handlers
  const handleRowClick = useCallback(
    (incident: IncidentForm & { _id: string }) => {
      setEditingIncident(incident);
      setForm({
        ...incident,
        date: incident.date ? new Date(incident.date) : undefined,
        organization: incident.organization,
      });
      setIsOpen(true);
    },
    []
  );

  const handleCreate = useCallback(() => {
    if (editingIncident) {
      setForm(defaultForm);
    }
    setEditingIncident(null);
    setIsOpen(true);
  }, [editingIncident]);

  const handleClose = useCallback(() => {
    setForm(defaultForm);
    setEditingIncident(null);
    setIsOpen(false);
  }, []);

  if (meLoading) return <p>Loading user...</p>;
  if (meError) return <p className="text-red-500">Failed to fetch user info</p>;

  return (
    <div className="h-screen flex flex-col dark:bg-gradient-to-r dark:from-sky-950 dark:to-sky-800 dark:text-white">
      {/* Print Container */}
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          {editingIncident && <PrintWrapper incident={form} />}
        </div>
      </div>
      <div>
        {/* Header (now gets role + org from /me) */}
        <IncidentsHeader
          selectedOrg={selectedOrg}
          onSelectOrg={setSelectedOrg}
          role={role}
          userOrg={userOrg}
          email={me?.user?.email ?? ""}
        />
      </div>

      {/* Main Table */}
      <div className="p-6 overflow-y-auto flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-red-600 text-lg">Incident Reports</h1>

          {(role === "admin" || userOrg === "ALL") && selectedOrg === "ALL" && (
            // Update the search input handler
            <input
              type="text"
              placeholder="Search by Ref No. or Description..."
              value={search}
              onChange={(e) => {
                const value = e.target.value.trim();
                setSearch(value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {/* + Create Button & Modal */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* Only show Create button based on condition */}
            {!(
              (role === "admin" || userOrg === "ALL") &&
              selectedOrg === "ALL"
            ) && (
              <DialogTrigger asChild>
                <Button
                  className="cursor-pointer transition-none"
                  onClick={handleCreate}
                >
                  + Create
                </Button>
              </DialogTrigger>
            )}

            <DialogContent
              ref={dialogRef}
              className="max-h-[700px] 2xl:max-h-[750px] sm:max-w-[1100px] max-w-[600px] overflow-y-auto dark:bg-sky-950"
              onOpenAutoFocus={(e) => {
                e.preventDefault();
                if (dialogRef.current) {
                  dialogRef.current.focus();
                }
              }}
              onCloseAutoFocus={(e) => {
                e.preventDefault();
                setIsModalDisabled(false);
              }}
            >
              {" "}
              {/* onCloseAutoFocus={(e) => e.preventDefault()} -- will help to avoid moving to top after closing the modal*/}
              <DialogHeader>
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <DialogTitle>
                      {editingIncident
                        ? "Edit Incident Report"
                        : "File Incident Report"}
                    </DialogTitle>

                    <div className="text-[0.84rem] text-gray-400 italic font-semibold flex items-center gap-2">
                      {editingIncident ? `(Ref No: ${form.refNo})` : null}
                      {selectedOrg === "ALL" && (
                        <p className="text-[13px] font-medium text-gray-500 mb-[0.10rem]">
                          {" "}
                          - {form.organization}
                        </p>
                      )}
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
                            {form.dateReported ? (
                              format(form.dateReported, "PPP")
                            ) : (
                              <span>Filing Date</span>
                            )}
                          </span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          className="w-[300px]"
                          mode="single"
                          selected={form.dateReported}
                          onSelect={(d) =>
                            handleChange("dateReported", d ?? undefined)
                          }
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
                          disabled={isPrinting}
                          className="h-[34px]"
                        >
                          {isPrinting ? "Preparing..." : "Print"}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogHeader>
              <div className={isModalDisabled ? "pointer-events-none" : ""}>
                <IncidentModal
                  onClose={handleClose}
                  // always pass selectedOrg into the form
                  form={{
                    ...form,
                    organization: editingIncident
                      ? form.organization
                      : selectedOrg,
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
            onPageChange={setCurrentPage}
            onItemsPerPageChange={(val) => {
              setItemsPerPage(val);
              setCurrentPage(1);
            }}
          />
        )}
      </div>
    </div>
  );
}
