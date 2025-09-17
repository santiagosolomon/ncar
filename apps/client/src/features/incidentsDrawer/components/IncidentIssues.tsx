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
import { IncidentIssues } from "@/types/incidentIssues"
import { IncidentIssuesSelection } from "@/types/incidentIssues"

import { useIncidents } from "@/hooks/useIncidentQueries"

interface IncidentIssuesDrawerProps {
  details: IncidentIssues[]
  setDetails: (updater: (prev: IncidentIssues[]) => IncidentIssues[]) => void
  issuesSelection: IncidentIssuesSelection
  setIssuesSelection: (updater: (prev: IncidentIssuesSelection) => IncidentIssuesSelection) => void
}

export function IncidentIssuesDrawer({ details, setDetails, issuesSelection, setIssuesSelection }: IncidentIssuesDrawerProps) {


  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild >
        <Button variant="outline">View Issues</Button>
      </DrawerTrigger>
      <DrawerContent >
        <DrawerHeader >
          <DrawerTitle>Incident Issues</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto px-6 pb-6">
          <IncidentIssuesTable details={details} setDetails={setDetails}  issuesSelection={issuesSelection} setIssuesSelection={setIssuesSelection} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

