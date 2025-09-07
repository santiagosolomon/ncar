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
import { useIncidents } from "@/hooks/useIncidentQueries"
import { IncidentDetails } from "@/types/incidentDetails"

interface IncidentDetailsDrawerProps {
  details: IncidentDetails[]
  setDetails: (updater: (prev: IncidentDetails[]) => IncidentDetails[]) => void
}

export function IncidentDetailsDrawer({ details, setDetails }: IncidentDetailsDrawerProps) {


  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild>
        <Button variant="outline">View Incidents</Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Incident Details</DrawerTitle>
        </DrawerHeader>


        <IncidentDetailsTable details={details} setDetails={setDetails} />

      </DrawerContent>
    </Drawer>
  )
}

