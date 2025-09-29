import {
  AlertTriangle,
  DollarSign,
  FileText,
  MapPin,
  Pill,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: Pill,
    title: "Informacion integral",
    description:
      "Ficha tecnica, principios activos, concentraciones, contraindicaciones y equivalentes terapeuticos en un solo lugar.",
  },
  {
    icon: DollarSign,
    title: "Comparador de precios",
    description:
      "Actualizacion de precios de referencia en farmacias y alertas sobre el valor maximo regulado en Colombia.",
  },
  {
    icon: AlertTriangle,
    title: "Eventos adversos",
    description:
      "Alertas de farmacovigilancia, efectos secundarios frecuentes y advertencias criticas para cada medicamento.",
  },
  {
    icon: FileText,
    title: "Guias terapeuticas",
    description:
      "Indicaciones aprobadas, esquemas de dosificacion y recomendaciones clinicas basadas en evidencia.",
  },
  {
    icon: MapPin,
    title: "Disponibilidad geolocalizada",
    description:
      "Ubica proveedores y farmacias cercanas con inventario reportado y tiempos estimados de entrega.",
  },
  {
    icon: Smartphone,
    title: "Experiencia omnicanal",
    description:
      "Interfaz responsiva optimizada para equipos medicos, pacientes y farmacias desde cualquier dispositivo.",
  },
]

export function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-5xl rounded-[40px] bg-gradient-to-b from-primary/10 via-white to-transparent blur-3xl" aria-hidden />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-sm ring-1 ring-white/60">
            Beneficios clave
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Datos confiables para decisiones clinicas seguras
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            MedLynx traduce la complejidad regulatoria y cientifica en informacion clara, accionable y facil de compartir con pacientes y equipos medicos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_30px_70px_-45px_rgb(19,62,135,0.55)] backdrop-blur transition-transform duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-primary/4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

