
// "use client"

// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import { Button } from "@/components/ui/button"
// import { IncidentIssuesTable } from "@/features/incidentsTable/components/IncidentIssues"
// import { IncidentIssues } from "@/types/incidentIssues"

// const mockData: IncidentIssues[] = [
//   {
//     grossWeight: "100kg",
//     netWeight: "90kg",
//     tareWeight: "10kg",
//   },
//   {
//     grossWeight: "200kg",
//     netWeight: "180kg",
//     tareWeight: "20kg",
//   },
//   {
//     grossWeight: "300kg",
//     netWeight: "270kg",
//     tareWeight: "30kg",
//   },
//   {
//     grossWeight: "400kg",
//     netWeight: "360kg",
//     tareWeight: "40kg",
//   },
// ]

// export function IncidentIssuesDrawer() {
//   return (
//     <Drawer>
//       <DrawerTrigger className="cursor-pointer" asChild >
//         <Button variant="outline">View Issues</Button>
//       </DrawerTrigger>
//       <DrawerContent className="p-6">
//         <DrawerHeader>
//           <DrawerTitle>Incident Issues</DrawerTitle>
//         </DrawerHeader>
//         <IncidentIssuesTable data={mockData} />
//       </DrawerContent>
//     </Drawer>
//   )
// }

