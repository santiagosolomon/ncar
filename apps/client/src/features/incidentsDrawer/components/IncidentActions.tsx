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
     
        <DrawerContent className=" inset-y-[-10px] fixed  ">
          <DrawerHeader >
            <DrawerTitle>Incident Correction Action</DrawerTitle>
          </DrawerHeader>

          {/* Scrollable area */}
          <div className="px-6 pb-6 overflow-x-auto ">
            <IncidentActionsTable details={details} setDetails={setDetails} />
          </div>
        </DrawerContent>
    
    </Drawer>
  )
}

