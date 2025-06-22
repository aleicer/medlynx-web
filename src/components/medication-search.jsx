"use client"

import {useEffect, useState} from "react"
import {Search} from "lucide-react"
import {PropagateLoader} from "react-spinners";
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {MedicationCard} from "@/components/medication-card"
import {MedicationDetail} from "@/components/medication-detail"
import {getMedications, getSpecificMedicine} from "@/services/datosGov"
import {getAIMedicineInfo} from "@/services/clientAi"
import {saveMedicationDB, findMedicationDB} from '@/services/medlynx'


export function MedicationSearch() {
  const [searchType, setSearchType] = useState("nombre")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedMedication, setSelectedMedication] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [datosGovInfo, setDatosGovInfo] = useState(null)
  const [clientAiInfo, setClientAiInfo] = useState(null)
  const [avgPrices, setAvgPrices] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
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
      const res = await getSpecificMedicine(payload, type)
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

  const handleSaveMedicationDB = async () => {
    if (datosGovInfo && clientAiInfo) {
      try {
        const invimaDatosGovResponse = datosGovInfo
        const responseGemini = clientAiInfo
        const payload = {responseGemini, invimaDatosGovResponse}
        await saveMedicationDB(payload)
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  const findMedicationApi = async (data) => {
    try {
      const response = await findMedicationDB(data)
      if (response.data) {
        const {medicationClinical, ...legalInfo} = response.data[0]
        setClientAiInfo(medicationClinical)
        setDatosGovInfo(legalInfo)
        setIsLoading(false)
        return true
      }
      return false
    } catch (e) {
      console.log(e)
      return false
    }
  }

  useEffect(() => {
    handleSaveMedicationDB()
  }, [datosGovInfo, clientAiInfo])

  useEffect(() => {
    if (selectedMedication) {
      setIsLoading(true)
      const fetchMedicationDetails = async () => {
        const datosGovBody = {
          expediente: selectedMedication.expediente,
          consecutivocum: selectedMedication.consecutivocum,
          cantidadcum: selectedMedication.cantidadcum,
        };

        const clientAIBody = {
          medicineName: selectedMedication.producto,
          invima: selectedMedication.registrosanitario,
          activeIngredient: selectedMedication.principioactivo
        };
        const findDB = await findMedicationApi(datosGovBody)
        if (!findDB) {
          try {
            await Promise.all([
              getDatosGovInfo(datosGovBody),
              getClientAiInfo(clientAIBody)
            ]);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsLoading(false)
          }
        }
      };

      fetchMedicationDetails();
    }
  }, [selectedMedication])
  console.log((!datosGovInfo && !clientAiInfo) && selectedMedication !== null)
  return (
    <div className="space-y-6">
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Buscar por:</h2>
            <RadioGroup defaultValue="nombre" className="flex space-x-4" onValueChange={setSearchType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nombre" id="nombre"/>
                <Label htmlFor="nombre">Nombre del medicamento</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="invima" id="invima"/>
                <Label htmlFor="invima">Registro INVIMA</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-text-secondary"/>
              <Input
                type="text"
                placeholder={searchType === "nombre" ? "Ej: Acetaminofén" : "Ej: INVIMA 2015M-0015432"}
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
              Buscar
            </Button>
          </div>
        </form>
      </div>

      {hasSearched && (
        <div className="space-y-6">
          {(!datosGovInfo && !clientAiInfo) ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Resultados de búsqueda ({searchResults.length})</h2>

              {searchResults.length > 0 ? (
                <div className="h-[600px] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
                    {searchResults.map((medication, index) => (
                      <MedicationCard
                        key={`${medication.expediente}-${medication.consecutivocum}-${index}`}
                        medication={medication}
                        onSelect={() => setSelectedMedication(medication)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow text-center">
                  <p className="text-text-secondary">No se encontraron medicamentos con ese criterio de búsqueda.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedMedication(null)
                  setDatosGovInfo(null)
                  setClientAiInfo(null)
                  setHasSearched(false)
                }}
                className="mb-4 cursor-pointer"
              >
                ← Volver a resultados
              </Button>
              {isLoading ? (
                <div className="flex justify-center items-center p-4">
                  <PropagateLoader/>
                </div>
              ) : (
                <MedicationDetail
                  medicationLegalInfo={datosGovInfo}
                  medicationClinicalInfo={clientAiInfo}
                  avgPricesInfo={avgPrices}
                />
              )}

            </div>
          )}
        </div>
      )}
    </div>
  )
}
