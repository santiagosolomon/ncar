//IncidentReport.tsx

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
import { Badge } from "@/components/ui/badge";

interface Props {
  data: Array<IncidentForm & { _id: string }>;
}

export default function IncidentMainTable({ data }: Props) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ref. No.</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((incident) => (
            <TableRow key={incident._id}>
              <TableCell>{incident.refNo}</TableCell>
              <TableCell>{incident.description}</TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}



{/* <TableCell>{incident.classification}</TableCell>
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
                </Badge> </TableCell> */}