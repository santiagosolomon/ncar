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
import { IncidentEvaluation } from "@/types/IncidentEvaluation"
import { IncidentEvaluationTable } from "@/features/incidentsTable/components/IncidentEvaluation"
import { IncidentActionsTable } from "@/features/incidentsTable/components/IncidentActions"

interface IncidentEvaluationDrawerProps {
  details: IncidentEvaluation[]
  setDetails: (updater: (prev: IncidentEvaluation[]) => IncidentEvaluation[]) => void
}

export function IncidentEvaluationDrawer({ details, setDetails }: IncidentEvaluationDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild>
        <Button variant="outline">View Evaluation</Button>
      </DrawerTrigger>
     
        <DrawerContent className="p-0 inset-y-0 fixed h-screen">
          <DrawerHeader className="px-6 py-4 ">
            <DrawerTitle>Incident Evaluation</DrawerTitle>
          </DrawerHeader>

          {/* Scrollable area */}
          <div className="px-6 pb-6 overflow-y-auto ">
            <IncidentEvaluationTable details={details} setDetails={setDetails} />
          </div>
        </DrawerContent>
    
    </Drawer>
  )
}

