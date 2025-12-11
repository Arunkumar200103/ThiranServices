import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thiran360AI - Complete Software Solutions Provider",
  description:
    "Custom software development, web apps, mobile apps, ERP, e-commerce, and AI tools. Free 1 year hosting + SEO included.",
  // generator: "v0.app",
  keywords: "software development, web development, mobile app, ERP, e-commerce, AI tools, custom software",
  openGraph: {
    title: "Thiran360AI - Complete Software Solutions",
    description:
      "Expert developers delivering websites, apps, ERP systems, and AI solutions with free hosting and SEO.",
  },
  icons: {
    icon: [
      {
        url: "/Thiranlogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/iThiranlogo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Thiranlogo.png",
        type: "image/png+xml",
      },
    ],
    apple: "/aThiranlogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased bg-black`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
