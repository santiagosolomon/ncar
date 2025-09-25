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
        <Button variant="outline">View Details</Button>
      </DrawerTrigger>
      <DrawerContent className="dark:bg-sky-950">
        <DrawerHeader>
          <DrawerTitle>Incident Details</DrawerTitle>
        </DrawerHeader>

        <div className="overflow-y-auto px-6 pb-6">
          <IncidentDetailsTable details={details} setDetails={setDetails} />
        </div>

      </DrawerContent>
    </Drawer>
  )
}

