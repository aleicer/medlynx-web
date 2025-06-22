import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {DollarSign, Pill, ShieldAlert, Stethoscope, Info} from "lucide-react"

export function MedicationDetail({medicationLegalInfo, medicationClinicalInfo, avgPricesInfo}) {
  console.log('medicationLegalInfo', medicationLegalInfo)
  console.log('medicationClinicalInfo', medicationClinicalInfo)
  return (
    <div className="space-y-6">
      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="bg-secondary/20 p-4 rounded-lg flex items-center justify-center">
            <Pill className="h-12 w-12 text-secondary"/>
          </div>
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl font-bold">{medicationLegalInfo.producto}</h2>
            <p className="text-text-secondary">{medicationLegalInfo.titular}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline" className="bg-primary/10">
                Reg. INVIMA: {medicationLegalInfo.registrosanitario.replace('INVIMA', '').trim()}
              </Badge>
              <Badge variant="outline" className="bg-secondary/10">
                {medicationLegalInfo.formaFarmaceutica}
              </Badge>
              {(medicationLegalInfo?.requiereReceta || false) && (
                <Badge variant="outline" className="bg-accent/10">
                  Requiere receta médica
                </Badge>
              )}
            </div>
          </div>
          <div className="bg-secondary/10 p-4 rounded-lg text-center">
            <p className="text-sm text-primary font-medium">Precio máximo regulado</p>
            <p
              className="text-2xl font-bold text-primary mt-1">${(medicationLegalInfo?.precioRegulado?.toLocaleString("es-CO") || 'N/A')}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="descripcion" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="descripcion">Información</TabsTrigger>
          <TabsTrigger value="usos">Usos</TabsTrigger>
          <TabsTrigger value="tratamientos">Tratamiento</TabsTrigger>
          <TabsTrigger value="adversos">Precauciones</TabsTrigger>
          <TabsTrigger value="precios">Precios</TabsTrigger>
        </TabsList>

        <TabsContent value="descripcion" className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-primary"/>
            <h3 className="text-lg font-semibold">Información General</h3>
          </div>
          <p className="text-text-primary mb-6">{medicationClinicalInfo.informacion_general}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
              <p>{medicationLegalInfo.formafarmaceutica}</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Vía de administración</h4>
              <p>{medicationLegalInfo.viaadministracion}</p>
            </div>
          </div>

          {medicationClinicalInfo.notas_adicionales && (
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <h4 className="font-medium text-primary mb-2">Notas Adicionales</h4>
              <p className="text-text-primary text-sm">{medicationClinicalInfo.notas_adicionales}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="usos" className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="h-5 w-5 text-secondary"/>
            <h3 className="text-lg font-semibold">Indicaciones Principales</h3>
          </div>

          <div className="space-y-4 mb-6">
            {medicationClinicalInfo.usos_y_tratamiento.indicaciones_principales.map((indicacion, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4 py-2">
                <h4 className="font-medium text-primary">{indicacion.enfermedad}</h4>
                <p className="text-text-secondary mt-1">{indicacion.descripcion_uso}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-medium text-secondary mb-2">Mecanismo de Acción</h4>
            <p className="text-text-primary text-sm">{medicationClinicalInfo.usos_y_tratamiento.mecanismo_accion}</p>
          </div>
        </TabsContent>

        <TabsContent value="tratamientos" className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="h-5 w-5 text-secondary"/>
            <h3 className="text-lg font-semibold">Formas de Uso</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Vía de Administración</h4>
              <p>{medicationClinicalInfo.usos_y_tratamiento.formas_de_uso.via_administracion}</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">Presentaciones Comunes</h4>
              <ul className="space-y-1">
                {medicationClinicalInfo.usos_y_tratamiento.formas_de_uso.presentaciones_comunes.map((presentacion, index) => (
                  <li key={index} className="text-sm flex gap-2">
                    <span className="text-secondary">•</span>
                    <span>{presentacion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg">
            <h4 className="font-medium text-accent mb-2">Instrucciones Específicas</h4>
            <p className="text-text-primary text-sm">
              {medicationClinicalInfo.usos_y_tratamiento.formas_de_uso.instrucciones_especificas}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="adversos" className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <ShieldAlert className="h-5 w-5 text-accent"/>
            <h3 className="text-lg font-semibold">Contraindicaciones y Precauciones</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-red-600 mb-3">Contraindicaciones</h4>
              <div className="space-y-2">
                {medicationClinicalInfo.contraindicaciones_y_precauciones.contraindicaciones.map((contraindicacion, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{contraindicacion.descripcion}</p>
                      <Badge variant="outline" className="ml-2 bg-red-100 text-red-700 text-xs">
                        {contraindicacion.tipo}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Efectos Secundarios Comunes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {medicationClinicalInfo.contraindicaciones_y_precauciones.efectos_secundarios_comunes.map((efecto, index) => (
                      <li key={index} className="text-sm flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{efecto}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Efectos Secundarios Graves</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {medicationClinicalInfo.contraindicaciones_y_precauciones.efectos_secundarios_graves?.map((efecto, index) => (
                      <li key={index} className="text-sm flex gap-2">
                        <span className="text-red-500">•</span>
                        <span>{efecto}</span>
                      </li>

                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="precios" className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="h-5 w-5 text-secondary"/>
            <h3 className="text-lg font-semibold">Comparación de precios</h3>
          </div>

          <div className="space-y-4">
            {(avgPricesInfo.length > 0 ? avgPricesInfo : []).map((precio, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 flex justify-between items-center">
                  <div className="font-medium">{precio.farmacia}</div>
                  <div className="text-xl font-bold text-primary">${precio.valor.toLocaleString("es-CO")}</div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Disponibilidad:</span>
                    <span className={precio.disponible ? "text-green-600" : "text-red-600"}>
                      {precio.disponible ? "En stock" : "Agotado"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-text-secondary">Última actualización:</span>
                    <span>{precio.actualizacion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-primary/10 p-4 rounded-lg">
            <p className="text-sm text-primary">
              Los precios mostrados son referenciales y pueden variar. Última actualización: Mayo 2025.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
