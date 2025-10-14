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
import { ThemeToggle } from "@/components/ThemeToggle";

import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface Props {
  selectedOrg: "PTC" | "GICC" | "ALL"
  onSelectOrg: (org: "PTC" | "GICC" | "ALL") => void
  role: "admin" | "user"
  userOrg: "PTC" | "GICC" | "ALL"
  email: string
}

export default function IncidentsHeader({ selectedOrg, onSelectOrg, role, userOrg, email }: Props) {

  const [error, setError] = useState('');
  const router = useRouter()

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

  // decide which orgs to show
  const availableOrgs =
    role === "admin" || userOrg === "ALL"
      ? ["PTC", "GICC", "ALL"]
      : [userOrg]

  return (
    <header className="flex justify-between items-center dark:bg-gradient-to-r dark:from-sky-950 dark:to-sky-800 dark:text-white bg-white border-b px-6 py-3 shadow-sm ">

      <div className=" text-gray-700 font-bold tracking-wider dark:text-white">
        <h1>{selectedOrg == "ALL" ? "NCAR" : selectedOrg}</h1>
      </div>
      <div className="flex ">
        <div className="border-none transition-none">
          <ThemeToggle />
        </div>
        {/* Hamburger menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer transition-none">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Signed in as
            </DropdownMenuLabel>
            <div className="px-2 py-1 text-sm text-foreground truncate font-medium">
              {email}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Organization</DropdownMenuLabel>
            {availableOrgs.map((org) => (
              <DropdownMenuItem
                key={org}
                onClick={() => onSelectOrg(org as any)}
                className={cn(selectedOrg === org && "bg-gray-100 dark:bg-gray-700", "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600")}
              >
                {selectedOrg === org ? "✓ " : ""} {org}
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
