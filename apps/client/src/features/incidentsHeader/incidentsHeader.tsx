//features/incidentsHeader/incidentsHeader.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {
  selectedOrg: "PTC" | "GICC" | "ALL"
  onSelectOrg: (org: "PTC" | "GICC" | "ALL") => void
  role: "admin" | "user"
  userOrg: "PTC" | "GICC" | "ALL"
}

export default function IncidentsHeader({ selectedOrg, onSelectOrg, role, userOrg }: Props) {

  const [error, setError] = useState('');
  const router = useRouter()

  // const handleLogout = () => {

  // }

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
      if (res.ok) {
        router.push("/login")
      }
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  // 👇 decide which orgs to show
  const availableOrgs =
    role === "admin" || userOrg === "ALL"
      ? ["PTC", "GICC", "ALL"]
      : [userOrg]

  return (
    <header className="flex justify-between items-center bg-white border-b px-6 py-3 shadow-sm ">

      <div className="font-mono text-gray-700">
        <h1>{selectedOrg}</h1>
      </div>
      {/* 🍔 Hamburger menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuLabel>Organization</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {availableOrgs.map((org) => (
            <DropdownMenuItem key={org} onClick={() => onSelectOrg(org as any)}>
              {selectedOrg === org ? "✓ " : ""} {org}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="text-red-600">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
