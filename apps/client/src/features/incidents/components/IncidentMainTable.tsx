//IncidentMainTable

"use client";

import { useState } from "react";
import { IncidentForm } from "@/types/incidentModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { LuChevronRight } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal, ChevronDown, ChevronRight } from "lucide-react";

import clsx from "clsx";
import Image from "next/image";

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

  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm dark:text-white dark:border-sky-900 dark:shadow-md dark:bg-sky-950 relative">
      {/* Decorative Background Logo */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="relative right-30 bottom-10 bottom right w-[400px] h-[400px] opacity-[0.03] dark:opacity-[0.07] hidden sm:block">
          <Image
            src="/petboweLogoMain.png"
            alt="PetBowe Logo"
            fill
            className="object-contain"
            loading="lazy"
            priority={false}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="transition-none">
            <TableHead>Ref. No.</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Classification</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((incident) => (
            <TableRow
              key={incident._id}
              className={clsx(
                " hover:bg-gray-50 dark:hover:bg-gray-700 transition-none",
                editingIncident?._id === incident._id
                  ? "bg-blue-50 dark:bg-blue-800"
                  : "",
                incident.description.length > 100 ? "cursor-pointer " : ""
              )}
              onClick={() => {
                setExpandedRows((prev) =>
                  prev.includes(incident._id)
                    ? prev.filter((id) => id !== incident._id)
                    : [...prev, incident._id]
                );
              }}
            >
              <TableCell>{incident.refNo}</TableCell>
              <TableCell className="max-w-[300px] relative">
                {/* Icon positioned slightly left */}
                {incident.description.length > 100 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={clsx(
                      "absolute -left-2 top-[53%] -translate-y-1/2 h-0 w-0  text-gray-500 hover:text-gray-800 dark:text-gray-300"
                    )}
                    onClick={() => {
                      setExpandedRows((prev) =>
                        prev.includes(incident._id)
                          ? prev.filter((id) => id !== incident._id)
                          : [...prev, incident._id]
                      );
                    }}
                  >
                    {expandedRows.includes(incident._id) ? (
                      <ChevronDown className="h-4 w-4 " />
                    ) : (
                      <ChevronRight className="h-4 w-4 " />
                    )}
                  </Button>
                )}

                {/* Description text */}

                {expandedRows.includes(incident._id) ? (
                  <p className="whitespace-pre-wrap ">{incident.description}</p>
                ) : (
                  <p className="truncate line-clamp-2">
                    {incident.description}
                  </p>
                )}
              </TableCell>

              <TableCell>{incident.classification}</TableCell>
              <TableCell>{incident.status}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="cursor-pointer h-4 transition-none"
                      size="icon"
                    >
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRowClick(incident);
                      }}
                    >
                      Edit Incident
                    </DropdownMenuItem>
                    {/* Future actions can be added here */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <SelectItem key={p} value={String(p)}>
                      {p}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>

            <span className="text-sm text-gray-600">of {totalPages} pages</span>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onPageChange(Math.min(totalPages, currentPage + 1))
              }
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
