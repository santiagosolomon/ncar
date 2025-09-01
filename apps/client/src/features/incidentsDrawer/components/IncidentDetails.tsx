// //incidentsDrawer/IncidentDetails.tsx

// "use client"

// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import { Button } from "@/components/ui/button"
// import { IncidentDetailsTable } from "@/features/incidentsTable/components/IncidentDetails"
// import { useIncidents } from "@/hooks/useIncidentQueries"

// export function IncidentDetailsDrawer() {
//   const { data: incidents = [], isLoading } = useIncidents()

//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <Button variant="outline">View Incidents</Button>
//       </DrawerTrigger>
//       <DrawerContent className="p-6">
//         <DrawerHeader>
//           <DrawerTitle>Incident Details</DrawerTitle>
//         </DrawerHeader>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <IncidentDetailsTable />
//         )}
//       </DrawerContent>
//     </Drawer>
//   )
// }

