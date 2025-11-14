import { HomePageClient } from "./HomePageClient"

export const metadata = {
  title: "Yimesgen  Limousine - Luxury Transportation | Book Your Ride Today",
  description:
    "Premium limousine rental services. Wedding limos, corporate transportation, airport transfers, and special event limos. 24/7 booking available.",
  openGraph: {
    title: "Yimesgen  Limousine - Luxury Transportation Services",
    description: "Book premium limousine services for your special occasion",
    type: "website",
  },
}

export default function Home() {
  return <HomePageClient />
}
