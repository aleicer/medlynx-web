"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Pill, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-[#526777]/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#3a7ca5] p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#3a7ca5]">MedLinx</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "default" : "ghost"}
                className={
                  pathname === "/"
                    ? "bg-[#3a7ca5] hover:bg-[#3a7ca5]/90 text-white"
                    : "text-[#2f3e46] hover:text-[#3a7ca5] hover:bg-[#3a7ca5]/10"
                }
              >
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Button>
            </Link>
            <Link href="/search">
              <Button
                variant={pathname === "/search" ? "default" : "ghost"}
                className={
                  pathname === "/search"
                    ? "bg-[#3a7ca5] hover:bg-[#3a7ca5]/90 text-white"
                    : "text-[#2f3e46] hover:text-[#3a7ca5] hover:bg-[#3a7ca5]/10"
                }
              >
                <Search className="h-4 w-4 mr-2" />
                Buscador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
