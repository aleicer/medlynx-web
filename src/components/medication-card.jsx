"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill } from "lucide-react"

export function MedicationCard({ medication, onSelect }) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0.5">
                <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 p-3 rounded-full">
                        <Pill className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg line-clamp-2">{medication.producto}</h3>
                        <p className="text-sm text-gray-500 mt-1">{medication.titular}</p>
                        <div className="mt-2">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Reg. INVIMA: {medication.registrosanitario}
              </span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6 py-3">
                <Button
                    variant="ghost"
                    className="w-full text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
                    onClick={onSelect}
                >
                    Ver detalles
                </Button>
            </CardFooter>
        </Card>
    )
}
