import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Proper Hyderabadis | Authentic Hyderabadi Dum Biryani in Australia",
  description:
    "Experience the royal taste of authentic Hyderabadi Dum Biryani, cooked by proper Hyderabadis in Melbourne, Australia. Traditional recipes, real spices, generations of legacy.",
  keywords: [
    "Hyderabadi Biryani",
    "Dum Biryani",
    "Melbourne Biryani",
    "Australian Indian Food",
    "Halal Biryani",
    "Glenroy",
    "Proper Hyderabadis",
  ],
  openGraph: {
    title: "Proper Hyderabadis | Authentic Hyderabadi Dum Biryani",
    description:
      "Cooked by Proper Hyderabadis. Taste the royal tradition in Australia.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
