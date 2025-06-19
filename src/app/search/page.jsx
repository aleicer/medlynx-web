import { MedicationSearch } from "@/components/medication-search"

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Buscador de Medicamentos</h1>
          <p className="text-text-secondary">
            Encuentra información completa sobre medicamentos registrados en Colombia
          </p>
        </div>
        <MedicationSearch />
      </div>
    </main>
  )
}
