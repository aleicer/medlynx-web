"use client"

import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Pill} from "lucide-react"

export function MedicationCard({medication, onSelect}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-blue-50/80 h-[250px] flex flex-col">
      <CardContent className="p-4 flex-1 overflow-hidden">
        <div className="flex items-start gap-3 h-full">
          <div className="bg-secondary/20 p-2 rounded-full shrink-0">
            <Pill className="h-5 w-5 text-secondary"/>
          </div>
          <div className="min-w-0 flex flex-col space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2">{medication.producto}</h3>
            <p className="text-sm text-text-secondary line-clamp-1">{medication.titular}</p>
            <div>
              <span
                className="inline-flex items-center rounded-full bg-blue-100/90 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 truncate max-w-full">
                Reg. INVIMA: {medication.registrosanitario}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-white/50 px-4 py-1 shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-primary hover:text-primary/80 hover:bg-primary/10 h-5 text-sm cursor-pointer"
          onClick={onSelect}
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  )
}
