import { Card, CardContent } from "@/components/ui/card"
import { Pill, DollarSign, AlertTriangle, FileText, MapPin, Smartphone } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Pill,
      title: "Información Completa",
      description: "Descripción detallada, principios activos, concentración y forma farmacéutica de cada medicamento.",
      color: "text-secondary",
    },
    {
      icon: DollarSign,
      title: "Comparación de Precios",
      description: "Precios actualizados en las principales farmacias de Colombia y precio máximo regulado.",
      color: "text-primary",
    },
    {
      icon: AlertTriangle,
      title: "Eventos Adversos",
      description: "Información sobre efectos secundarios comunes y graves, advertencias importantes.",
      color: "text-accent",
    },
    {
      icon: FileText,
      title: "Usos y Tratamientos",
      description: "Indicaciones médicas, dosificación recomendada y tratamientos específicos.",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Disponibilidad",
      description: "Consulta la disponibilidad en tiempo real en diferentes farmacias del país.",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva y responsive, optimizada para dispositivos móviles y desktop.",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Todo lo que necesitas saber sobre medicamentos</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Una plataforma completa que te brinda acceso a información confiable y actualizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-background p-3 rounded-lg">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
