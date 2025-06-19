import { Pill, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-text-secondary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MedLinx</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tu fuente confiable de información sobre medicamentos en Colombia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/search" className="hover:text-white transition-colors">
                  Buscador
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  INVIMA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datos.gov.co
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ministerio de Salud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@medlinx.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 MedLinx. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
