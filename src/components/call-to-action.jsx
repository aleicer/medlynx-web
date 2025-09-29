import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Sparkles } from "lucide-react"

export function CallToAction() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-gradient-to-r from-primary/10 via-white to-accent/10 blur-3xl" aria-hidden />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-12 text-center shadow-[0_40px_90px_-50px_rgb(19,62,135,0.6)] backdrop-blur">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-full bg-primary/10 px-5 py-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">Comienza hoy</span>
          </div>

          <h2 className="mt-8 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Listo para impulsar decisiones medicas con IA?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Explora la base de datos mas completa de medicamentos en Colombia y comparte insights confiables con tu equipo y pacientes.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/search">
              <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90">
                <Search className="mr-2 h-5 w-5" />
                Ir al buscador
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-6 text-base font-semibold text-primary/80 hover:bg-primary/5"
            >
              Solicitar una demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
