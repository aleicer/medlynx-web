"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Pill } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/search", label: "Buscador" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.01]">
          <span className="rounded-full bg-primary/10 p-2.5 text-primary shadow-sm">
            <Pill className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-primary/60">Med</span>
            <span className="text-xl font-semibold text-primary">
              Lynx<span className="pl-1 text-secondary">+</span>
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                pathname === link.href ? "text-primary" : "text-text-secondary hover:text-primary"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
