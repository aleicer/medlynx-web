import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Activity,
  LineChart,
  Pill,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const featurePoints = [
  {
    icon: ShieldCheck,
    title: "Datos verificados",
    description: "Fuentes oficiales del INVIMA y el Ministerio de Salud",
  },
  {
    icon: Search,
    title: "Busqueda precisa",
    description: "Filtra por nombre comercial o registro sanitario",
  },
  {
    icon: LineChart,
    title: "Analisis inteligente",
    description: "Compara precios, presentaciones y disponibilidad",
  },
]

const insightCards = [
  {
    icon: Pill,
    title: "+12k",
    caption: "Presentaciones activas",
    gradient: "from-primary/15 via-white to-primary/5",
  },
  {
    icon: Activity,
    title: "24/7",
    caption: "Actualizacion constante",
    gradient: "from-accent/20 via-white to-accent/5",
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -right-20 top-12 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 lg:flex-row lg:items-center">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-sm ring-1 ring-white/70">
            Inteligencia medica
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Plataforma inteligente para descubrir medicamentos en Colombia
          </h1>

          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Accede a informacion detallada de medicamentos, indicaciones, eventos adversos y precios en las principales farmacias del pais con analisis asistido por IA.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/search">
              <Button size="lg" className="h-12 rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90">
                <Search className="mr-2 h-5 w-5" />
                Buscar medicamentos
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/40 bg-white/80 px-8 text-base font-semibold text-primary hover:border-primary/60 hover:bg-primary/5"
            >
              Como funciona
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {featurePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_40px_-30px_rgb(19,62,135,0.6)] backdrop-blur"
              >
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 lg:max-w-[420px]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-[0_40px_80px_-50px_rgb(19,62,135,0.55)] backdrop-blur">
            <div className="absolute -top-16 right-10 h-44 w-44 rounded-full bg-primary/15 blur-3xl" aria-hidden />
            <div className="absolute -bottom-12 left-6 h-56 w-56 rounded-full bg-accent/20 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10">
              <div className="inline-flex max-w-max items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">IA aplicada a la salud</span>
              </div>

              <div className="grid gap-4">
                {insightCards.map((card) => (
                  <div
                    key={card.title}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-6 shadow-[0_25px_50px_-25px_rgb(19,62,135,0.35)]`}
                  >
                    <card.icon className="h-8 w-8 text-primary" />
                    <div className="mt-4 text-4xl font-semibold text-primary">{card.title}</div>
                    <p className="text-sm text-text-secondary">{card.caption}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-dashed border-primary/20 bg-white/70 p-6 text-sm text-text-secondary">
                Monitorea alertas regulatorias, disponibilidad local y equivalentes terapeuticos con paneles dinamicos en tiempo real.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
