//IncidentMainTable

"use client";

import { IncidentForm } from "@/types/incidentModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";

import clsx from "clsx"

interface Props {
  data: Array<IncidentForm & { _id: string }>;
  onRowClick: (incident: IncidentForm & { _id: string }) => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (val: number) => void;
  editingIncident: (IncidentForm & { _id: string }) | null;
}

export default function IncidentMainTable({
  data,
  onRowClick,
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  editingIncident,
}: Props) {
  const startIdx = data.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endIdx = data.length > 0 ? startIdx + data.length - 1 : 0;

  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm dark:text-white dark:border-sky-900 dark:shadow-md dark:bg-sky-950 ">
      <Table>
        <TableHeader>
          <TableRow className="transition-none">
            <TableHead>Ref. No.</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((incident) => (
            <TableRow
              key={incident._id}
              className={clsx("cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-none", editingIncident?._id === incident._id ? "bg-blue-50 dark:bg-blue-800" : "")}
              onClick={() => onRowClick(incident)}
            >
              <TableCell>{incident.refNo}</TableCell>
              <TableCell>{incident.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ✅ Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 p-3 border-t">
        {/* Showing info */}
        <p className="text-sm text-gray-600">
          Showing {startIdx}–{endIdx} of {itemsPerPage * totalPages}
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {/* Items per page dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Items per page:</span>
            <Select
              value={String(itemsPerPage)}
              onValueChange={(val) => onItemsPerPageChange(Number(val))}
            >
              <SelectTrigger className="w-[80px] transition-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 50, 100].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Page selector */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer transition-none"
            >
              <LuChevronLeft />
            </Button>

            <Select
              value={String(currentPage)}
              onValueChange={(val) => onPageChange(Number(val))}
            >
              <SelectTrigger className="transition-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <SelectItem key={p} value={String(p)}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <span className="text-sm text-gray-600">of {totalPages} pages</span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="cursor-pointer transition-none"
            >
              <LuChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
