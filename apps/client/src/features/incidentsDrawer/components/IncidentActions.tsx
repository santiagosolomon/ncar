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
import { IncidentActions } from "@/types/IncidentActions"
import { IncidentActionsTable } from "@/features/incidentsTable/components/IncidentActions"

interface IncidentActionsDrawerProps {
  details: IncidentActions[]
  setDetails: (updater: (prev: IncidentActions[]) => IncidentActions[]) => void
}

export function IncidentActionsDrawer({ details, setDetails }: IncidentActionsDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild>
        <Button variant="outline">View Action</Button>
      </DrawerTrigger>
     
        <DrawerContent className="p-0 inset-y-0 fixed h-screen">
          <DrawerHeader className="px-6 py-4 ">
            <DrawerTitle>Incident Correction Action</DrawerTitle>
          </DrawerHeader>

          {/* Scrollable area */}
          <div className="px-6 pb-6 overflow-y-auto ">
            <IncidentActionsTable details={details} setDetails={setDetails} />
          </div>
        </DrawerContent>
    
    </Drawer>
  )
}

