import { Footer } from "@/components/footer"
import { MedicationSearch } from "@/components/medication-search"

export default function SearchPage() {
  return (
    <>
      <main className="min-h-screen bg-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-primary">Buscador de Medicamentos</h1>
            <p className="text-text-secondary">
              Encuentra informacion completa sobre medicamentos registrados en Colombia
            </p>
          </div>
          <MedicationSearch />
        </div>
      </main>
      <Footer />
    </>
  )
}
