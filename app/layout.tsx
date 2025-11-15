import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Poppins, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
})
const _sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Car Pros Automotive - Nashville Airbag & Safety Repair",
  description:
    "Nashville's trusted auto repair specialists. Expert airbag/SRS reset, seatbelt repair, electrical diagnostics, and collision bodywork since 2006.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a3a5c" />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen ${_poppins.variable} ${_sora.variable}`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
