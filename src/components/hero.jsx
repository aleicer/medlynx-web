import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Shield, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="py-20 px-4 glass-effect">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Encuentra tu medicamento de forma{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              segura y rápida
            </span>
          </h1>

          <p className="text-xl text-text-primary mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
            Accede a información completa y actualizada sobre medicamentos registrados en Colombia. Compara precios,
            conoce efectos adversos y toma decisiones informadas sobre tu salud.
          </p>

          <div className="flex justify-center mb-12 animate-slide-up">
            <Link href="/search">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-medium hover:shadow-hard transition-all duration-300 hover:scale-105"
              >
                <Search className="h-5 w-5 mr-2" />
                Buscar Medicamentos
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Información Oficial</h3>
              <p className="text-text-secondary">Datos directos del INVIMA y fuentes gubernamentales confiables</p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Búsqueda Inteligente</h3>
              <p className="text-text-secondary">Busca por nombre o registro INVIMA con resultados precisos</p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Actualizado</h3>
              <p className="text-text-secondary">Precios y disponibilidad actualizados en tiempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
