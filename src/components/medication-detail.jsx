import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, DollarSign, Pill, ShieldAlert, Stethoscope } from "lucide-react"

export function MedicationDetail({ medicationLegalInfo, medicationClinicalInfo, avgPricesInfo }) {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="bg-emerald-100 p-4 rounded-lg flex items-center justify-center">
                        <Pill className="h-12 w-12 text-emerald-600" />
                    </div>
                    <div className="space-y-2 flex-1">
                        <h2 className="text-2xl font-bold">{medicationLegalInfo.producto}</h2>
                        <p className="text-gray-600">{medicationLegalInfo.titular}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <Badge variant="outline" className="bg-blue-50">
                                Reg. INVIMA: {medicationLegalInfo.registrosanitario.replace('INVIMA', '').trim()}
                            </Badge>
                            <Badge variant="outline" className="bg-emerald-50">
                                {medicationLegalInfo.formafarmaceutica}
                            </Badge>
                            {(medicationLegalInfo?.requiereReceta || false) && (
                                <Badge variant="outline" className="bg-amber-50">
                                    Requiere receta médica
                                </Badge>
                            )}
                        </div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-emerald-700 font-medium">Precio máximo regulado</p>
                        <p className="text-2xl font-bold text-emerald-700 mt-1">
                            ${(medication?.precioRegulado?.toLocaleString("es-CO") || 'N/A')}
                        </p>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="descripcion" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4">
                    <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                    <TabsTrigger value="usos">Usos</TabsTrigger>
                    <TabsTrigger value="tratamientos">Tratamientos</TabsTrigger>
                    <TabsTrigger value="adversos">Eventos Adversos</TabsTrigger>
                    <TabsTrigger value="precios">Precios</TabsTrigger>
                </TabsList>

                <TabsContent value="descripcion" className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3">Descripción del medicamento</h3>
                    <p className="text-gray-700">{medicationLegalInfo.descripcioncomercial}</p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Principio activo</h4>
                            <p>{medicationLegalInfo.principioactivo}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Concentración</h4>
                            <p>{`${medicationLegalInfo.cantidad} ${medicationLegalInfo.unidadmedida}`}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Forma farmacéutica</h4>
                            <p>{medicationLegalInfo.unidadreferencia}</p>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h4 className="font-medium mb-2">Vía de administración</h4>
                            <p>{medicationLegalInfo.viaadministracion}</p>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="usos" className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <Stethoscope className="h-5 w-5 text-emerald-600" />
                        <h3 className="text-lg font-semibold">Usos médicos</h3>
                    </div>

                    <ul className="space-y-3 mt-4">
                        {(medication?.usos || []).map((uso, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="text-emerald-600 font-bold">•</span>
                                <span>{uso}</span>
                            </li>
                        ))}
                    </ul>
                </TabsContent>

                <TabsContent value="tratamientos" className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <Stethoscope className="h-5 w-5 text-emerald-600" />
                        <h3 className="text-lg font-semibold">Tratamientos</h3>
                    </div>

                    <div className="space-y-4 mt-4">
                        {(medication?.tratamientos || []).map((tratamiento, index) => (
                            <div key={index} className="border-l-4 border-emerald-500 pl-4 py-2">
                                <h4 className="font-medium">{tratamiento.condicion}</h4>
                                <p className="text-gray-600 mt-1">{tratamiento.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="adversos" className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <ShieldAlert className="h-5 w-5 text-amber-600" />
                        <h3 className="text-lg font-semibold">Eventos Adversos</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Comunes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-1">
                                    {(medication?.eventosAdversos?.comunes || []).map((evento, index) => (
                                        <li key={index} className="text-sm flex gap-2">
                                            <span className="text-amber-500">•</span>
                                            <span>{evento}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Graves</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-1">
                                    {(medication?.eventosAdversos?.graves || []).map((evento, index) => (
                                        <li key={index} className="text-sm flex gap-2">
                                            <span className="text-red-500">•</span>
                                            <span>{evento}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <div className="flex gap-2">
                            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-medium text-amber-800">Advertencias importantes</h4>
                                <p className="text-amber-700 mt-1 text-sm">{medication?.advertencias || 'Pending'}</p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="precios" className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-6">
                        <DollarSign className="h-5 w-5 text-emerald-600" />
                        <h3 className="text-lg font-semibold">Comparación de precios</h3>
                    </div>

                    <div className="space-y-4">
                        {(avgPricesInfo.length > 0 ? avgPricesInfo : []).map((precio, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4 flex justify-between items-center">
                                    <div className="font-medium">{(precio?.farmacia || 'pending')}</div>
                                    <div className="text-xl font-bold text-emerald-700">${(precio?.valor?.toLocaleString("es-CO" || 'pending'))}</div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Disponibilidad:</span>
                                        <span className={(precio?.disponible || 'pending') ? "text-green-600" : "text-red-600"}>
                      {(precio?.disponible || 'pending') ? "En stock" : "Agotado"}
                    </span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-1">
                                        <span className="text-gray-500">Última actualización:</span>
                                        <span>{(precio.actualizacion || 'pending')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">
                            Los precios mostrados son referenciales y pueden variar. Última actualización: Mayo 2025.
                        </p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
