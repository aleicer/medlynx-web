"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { MedicationCard } from "@/components/medication-card"
import { MedicationDetail } from "@/components/medication-detail"
import { mockMedications } from "@/lib/mock-data"
import { getMedications, getEspedificMedicine } from "@/services/datosGov"
import { getAIMedicineInfo } from '@/services/clientAi'

export function MedicationSearch() {
    const [searchType, setSearchType] = useState("nombre")
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [datosGovInfo, setDatosGovInfo] = useState(null)
    const [clientAiInfo, setClientAiInfo] = useState(null)
    const [avgPrices, setAvgPrices] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return

        // Simulate search with mock data
        // const results = mockMedications.filter((med) => {
        //     if (searchType === "nombre") {
        //         return med.nombre.toLowerCase().includes(searchQuery.toLowerCase())
        //     } else {
        //         return med.invima.includes(searchQuery)
        //     }
        // })
        try {
            const results = await getMedications(searchQuery, 'vigente')
            if (results.data) {
                setSearchResults(results.data)
                setDatosGovInfo(null)
                setHasSearched(true)
            }
        } catch (e) {
            console.log(e)
        }

    }

    const getDatosGovInfo = async (payload, type = 'vigente') => {
        try {
            const res = await getEspedificMedicine(payload, type)
            if (res.data) {
                setDatosGovInfo(res.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const getClientAiInfo = async (payload) => {
        try {
            const res = await getAIMedicineInfo(payload)
            if (res.data) {
                setClientAiInfo(res.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleSelectMedication = async (medication) => {
        const datosGovBody = {
            expediente: medication.expediente,
            consecutivocum: medication.consecutivocum,
            nombrerol: medication.nombrerol,
        }
        const clientAIBody ={
            medicineName: medication.producto,
            invima: medication.registrosanitario,
            activeIngredient: medication.principioactivo
        }
        getDatosGovInfo(datosGovBody)
        getClientAiInfo(clientAIBody)
    }

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSearch} className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-lg font-medium">Buscar por:</h2>
                        <RadioGroup defaultValue="nombre" className="flex space-x-4" onValueChange={setSearchType}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="nombre" id="nombre" />
                                <Label htmlFor="nombre">Nombre del medicamento</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="invima" id="invima" />
                                <Label htmlFor="invima">Registro INVIMA</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="flex space-x-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                type="text"
                                placeholder={searchType === "nombre" ? "Ej: Acetaminofén" : "Ej: INVIMA 2015M-0015432"}
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button type="submit">Buscar</Button>
                    </div>
                </form>
            </div>

            {hasSearched && (
                <div className="space-y-6">
                    {!datosGovInfo ? (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Resultados de búsqueda ({searchResults.length})</h2>

                            {searchResults.length > 0 ? (
                                <div style={{ width: '100%', height: '400px', overflowY: 'auto' }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {searchResults.map((medication, index) => (
                                          <MedicationCard
                                            key={`${medication.expediente}-${index}`}
                                            medication={medication}
                                            onSelect={() => handleSelectMedication(medication)}
                                          />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white p-8 rounded-lg shadow text-center">
                                    <p className="text-gray-500">No se encontraron medicamentos con ese criterio de búsqueda.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <Button variant="outline" onClick={() => setDatosGovInfo(null)} className="mb-4">
                                ← Volver a resultados
                            </Button>
                            <MedicationDetail
                              medicationLegalInfo={datosGovInfo}
                              medicationClinicalInfo={clientAiInfo}
                              avgPricesInfo={avgPrices}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
