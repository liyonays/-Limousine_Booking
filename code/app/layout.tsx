import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elite Limousine - Luxury Transportation Services | Book Now",
  description:
    "Premium limousine rental services for weddings, corporate events, airport transfers, and special occasions. Book your luxury limo today with Elite Limousine.",
  generator: "v0.app",
  keywords: [
    "limousine rental",
    "luxury car rental",
    "limo service",
    "wedding limo",
    "corporate transportation",
    "airport transfer limo",
    "party bus rental",
    "luxury transportation",
  ],
  authors: [{ name: "Elite Limousine" }],
  creator: "Elite Limousine",
  publisher: "Elite Limousine",
  formatDetection: {
    email: false,
    telephone: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitelimousine.com",
    siteName: "Elite Limousine",
    title: "Elite Limousine - Luxury Transportation Services",
    description:
      "Premium limousine rental for all your special occasions. Book now for weddings, corporate events, and more.",
    images: [
      {
        url: "/luxury-limousine.png",
        width: 1200,
        height: 630,
        alt: "Elite Limousine - Luxury Transportation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Limousine - Luxury Transportation",
    description: "Book premium limousine services for weddings, events, and corporate travel.",
    images: ["/luxury-limousine.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elitelimousine.com",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elite Limousine",
              image: "/placeholder.svg?key=85ekl",
              description:
                "Premium luxury transportation services for weddings, corporate events, airport transfers, and special occasions.",
              url: "https://elitelimousine.com",
              telephone: "(555) 123-4567",
              email: "info@elitelimo.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Luxury Ave, Suite 100",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              sameAs: [
                "https://facebook.com/elitelimo",
                "https://instagram.com/elitelimo",
                "https://twitter.com/elitelimo",
              ],
              serviceArea: {
                "@type": "City",
                name: "New York",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
