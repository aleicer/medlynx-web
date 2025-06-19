import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  )
}
