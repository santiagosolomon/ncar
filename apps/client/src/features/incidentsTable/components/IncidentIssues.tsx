"use client"

import { IncidentIssues } from "@/types/incidentIssues"

interface IncidentIssuesTableProps {
  data: IncidentIssues[]
}

export function IncidentIssuesTable({ data }: IncidentIssuesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Gross Weight</th>
            <th className="px-4 py-2 border">Net Weight</th>
            <th className="px-4 py-2 border">Tare Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((incidentIssues, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="px-4 py-2 border">{incidentIssues.grossWeight}</td>
              <td className="px-4 py-2 border">{incidentIssues.netWeight}</td>
              <td className="px-4 py-2 border">{incidentIssues.tareWeight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
