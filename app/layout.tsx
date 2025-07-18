import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Nunito_Sans } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kavya - Film",
  description: "Some sacrifices are written in silence. A story of quiet resilience and parental devotion.",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
