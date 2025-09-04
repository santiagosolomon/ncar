//incidentsDrawer/IncidentIssues.tsx

"use client"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { IncidentIssuesTable } from "@/features/incidentsTable/components/IncidentIssues"
import { IncidentIssues } from "@/types/incidentModal"

import { useIncidents } from "@/hooks/useIncidentQueries"

interface IncidentIssuesDrawerProps {
    details: IncidentIssues[]
    setDetails: (updater: (prev: IncidentIssues[]) => IncidentIssues[]) => void
}

export function IncidentIssuesDrawer({ details, setDetails }: IncidentIssuesDrawerProps) {
     const { data: incidents = [], isLoading } = useIncidents()

  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild >
        <Button variant="outline">View Issues</Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Incident Issues</DrawerTitle>
        </DrawerHeader>
        <IncidentIssuesTable details={details} setDetails={setDetails}/>
      </DrawerContent>
    </Drawer>
  )
}

