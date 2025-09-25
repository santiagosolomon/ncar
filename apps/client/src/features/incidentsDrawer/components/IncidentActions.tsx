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
import IncidentActionTable from "@/features/incidentsTable/components/IncidentActionTable"

interface IncidentActionsDrawerProps {
  details: IncidentActions
  setDetails: (updater: (prev: IncidentActions) => IncidentActions) => void
}

export function IncidentActionsDrawer({ details, setDetails }: IncidentActionsDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer" asChild>
        <Button variant="outline">View Action</Button>
      </DrawerTrigger>

      <DrawerContent className="inset-y-[-10px] fixed dark:bg-sky-950">
        <DrawerHeader>
          <DrawerTitle>Incident Correction Action</DrawerTitle>
        </DrawerHeader>

        <div className="px-6 pb-6 overflow-x-auto ">
          <IncidentActionTable details={details} setDetails={setDetails} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

