import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "MedLynx - Buscador de Medicamentos Colombia",
  description: "Encuentra informacion completa sobre medicamentos registrados en Colombia",
  keywords: ["medicamentos", "colombia", "invima", "farmacias", "precios"],
  authors: [{ name: "MedLynx Team" }],
  creator: "MedLynx",
  publisher: "MedLynx",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://medlynx.co",
    title: "MedLynx - Buscador de Medicamentos Colombia",
    description: "Encuentra informacion completa sobre medicamentos registrados en Colombia",
    siteName: "MedLynx",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedLynx - Buscador de Medicamentos Colombia",
    description: "Encuentra informacion completa sobre medicamentos registrados en Colombia",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-transparent text-[#0f1f3c] antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
