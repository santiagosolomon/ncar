//incidentsDrawer/IncidentDetails.tsx

"use client"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { IncidentDetailsTable } from "@/features/incidentsTable/components/IncidentDetails"
import { IncidentDetails } from "@/types/incidentDetails"

const mockData: IncidentDetails[] = [
  {
    id: "1",
    type: "Damage",
    deviation: "High",
    description: "Box torn during shipping",
    sku: "SKU1234",
    details: "10 units affected",
    outOfTotal: "10 / 500",
    poNo: "PO98765",
    lotNo: "LOT111",
    containerNo: "C12345",
    billOfLandingNo: "BL56789",
  },
  {
    id: "2",
    type: "Missing",
    deviation: "Medium",
    description: "2 items missing",
    sku: "SKU5678",
    details: "Carton undercount",
    outOfTotal: "2 / 200",
    poNo: "PO54321",
    lotNo: "LOT222",
    containerNo: "C67890",
    billOfLandingNo: "BL98765",
  },
]

export function IncidentDetailsDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View Incidents</Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Incident Details</DrawerTitle>
        </DrawerHeader>
        <IncidentDetailsTable data={mockData} />
      </DrawerContent>
    </Drawer>
  )
}
