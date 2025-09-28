import { Mail, MapPin, Phone, Pill } from "lucide-react"

const utilityLinks = [
  { label: "Inicio", href: "/" },
  { label: "Buscador", href: "/search" },
  { label: "Acerca de", href: "#" },
  { label: "Contacto", href: "#" },
]

const resourceLinks = [
  { label: "INVIMA", href: "#" },
  { label: "Datos.gov.co", href: "#" },
  { label: "Ministerio de Salud", href: "#" },
  { label: "Soporte", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/70 bg-white/90">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 via-white to-transparent" aria-hidden />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary/15 p-3 text-primary">
                <Pill className="h-6 w-6" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">Med</span>
                <span className="text-xl font-semibold text-primary">
                  Lynx<span className="pl-1 text-secondary">+</span>
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              Informacion confiable, visualizaciones claras y analisis impulsados por IA para optimizar la prescripcion y el acceso a medicamentos en Colombia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Navegacion</h3>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              {utilityLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Recursos</h3>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contacto</h3>
            <ul className="mt-5 space-y-4 text-sm text-text-secondary">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@medlynx.co</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 (321) 494-6645</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bogota, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/70 pt-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2025 MedLynx. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Terminos
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Seguridad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
