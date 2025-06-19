import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary via-accent to-primary/80 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">¿Listo para encontrar tu medicamento?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Accede ahora a nuestra base de datos completa y encuentra toda la información que necesitas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Comenzar Búsqueda
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Más Información
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
