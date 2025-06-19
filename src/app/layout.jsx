import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "MedLynx - Buscador de Medicamentos Colombia",
  description: "Encuentra información completa sobre medicamentos registrados en Colombia",
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
    description: "Encuentra información completa sobre medicamentos registrados en Colombia",
    siteName: "MedLynx",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedLynx - Buscador de Medicamentos Colombia",
    description: "Encuentra información completa sobre medicamentos registrados en Colombia",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
    <body className="bg-gradient-to-br from-[#a8d8b9]/30 via-[#f7f9fa] to-[#3a7ca5]/10 min-h-screen text-[#2f3e46] antialiased">
    <Navigation />
    <main>{children}</main>
    </body>
    </html>
  )
}
