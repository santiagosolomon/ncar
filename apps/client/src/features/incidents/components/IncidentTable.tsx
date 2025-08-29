"use client";

import { Incident } from "@ncar/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {
  data: Incident[];
}

export default function IncidentTable({ data }: Props) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ref. No.</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Classification</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((incident) => (
            <TableRow key={incident.refNo}>
              <TableCell>{incident.refNo}</TableCell>
              <TableCell>{incident.description}</TableCell>
              <TableCell>{incident.classification}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    incident.status === "Open"
                      ? "destructive"
                      : incident.status === "Ongoing"
                        ? "secondary"
                        : "default"
                  }
                  className={
                    incident.status === "Ongoing"
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                      : ""
                  }
                >
                  {incident.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
