"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Users, Zap, Wind } from "lucide-react"
import Head from "next/head"

export default function Fleet() {
  const [expandedVehicle, setExpandedVehicle] = useState(0)

  const vehicles = [
    {
      id: 1,
      name: "Luxury Sedan",
      capacity: 3,
      pricePerHour: 150,
      description:
        "Perfect for intimate gatherings and airport transfers. Elegant and comfortable with premium leather seating.",
      image: "/luxury-sedan-limousine.jpg",
      features: ["Climate control", "Premium sound system", "Leather seats", "Tinted windows", "USB charging", "WiFi"],
      specifications: {
        doors: 4,
        luggage: 3,
        fuelType: "Premium Gasoline",
        transmission: "Automatic",
      },
      amenities: ["Mini bar", "Reading lights", "Power windows", "Sunroof", "Phone charger"],
    },
    {
      id: 2,
      name: "Stretch Limousine",
      capacity: 8,
      pricePerHour: 250,
      description: "The ultimate party limo. Spacious interior with dance floor, bar service, and LED lighting system.",
      image: "/stretch-limousine-white.jpg",
      features: [
        "LED lighting",
        "Dance floor",
        "Full bar service",
        "Premium sound system",
        "Champagne chilling",
        "Fiber optics",
      ],
      specifications: {
        doors: 4,
        luggage: 6,
        fuelType: "Premium Gasoline",
        transmission: "Automatic",
      },
      amenities: [
        "Minibar with glass ware",
        "LED strobe lights",
        "DVD/media system",
        "Mood lighting",
        "Cell phone charger",
        "Intercom system",
      ],
    },
    {
      id: 3,
      name: "SUV Limousine",
      capacity: 6,
      pricePerHour: 200,
      description:
        "Modern SUV limo offering spacious comfort with premium features. Great for group events and corporate travel.",
      image: "/suv-limousine-black.jpg",
      features: [
        "Raised seating",
        "LED ceiling lights",
        "Climate zones",
        "Panoramic sunroof",
        "Premium sound",
        "Leather interior",
      ],
      specifications: {
        doors: 4,
        luggage: 8,
        fuelType: "Premium Gasoline",
        transmission: "Automatic",
      },
      amenities: [
        "Minibar",
        "Heated seats",
        "TV screens",
        "Bluetooth connectivity",
        "Dual climate control",
        "Partition divider",
      ],
    },
    {
      id: 4,
      name: "Party Bus",
      capacity: 12,
      pricePerHour: 300,
      description:
        "Ultimate celebration vehicle with dance floor, LED lighting, and premium entertainment system for your special night.",
      image: "/party-bus-limousine.jpg",
      features: ["Dance floor", "Multiple LED zones", "DJ booth", "Surround sound", "Multiple bars", "VIP seating"],
      specifications: {
        doors: 2,
        luggage: 10,
        fuelType: "Premium Diesel",
        transmission: "Automatic",
      },
      amenities: [
        "Full bar with keg system",
        "Pole dancing poles",
        "Neon lighting",
        "Plasma screens",
        "Sound system",
        "Dance floor with lights",
      ],
    },
    {
      id: 5,
      name: "Executive Coach",
      capacity: 14,
      pricePerHour: 350,
      description:
        "Luxury coach for large group transportation. Perfect for corporate events, group tours, and special occasions.",
      image: "/executive-coach-bus.jpg",
      features: ["Reclining seats", "Full kitchen", "Onboard restroom", "HD screens", "WiFi", "Climate control"],
      specifications: {
        doors: 2,
        luggage: 15,
        fuelType: "Premium Diesel",
        transmission: "Automatic",
      },
      amenities: [
        "Full galley kitchen",
        "Restroom with shower",
        "WiFi internet",
        "Entertainment system",
        "Conference table",
        "Lounge seating",
      ],
    },
    {
      id: 6,
      name: "Hummer Limousine",
      capacity: 14,
      pricePerHour: 400,
      description:
        "The ultimate statement vehicle. Massive H2 Hummer with premium amenities for unforgettable celebrations.",
      image: "/hummer-limousine-pink.jpg",
      features: [
        "Raised platform",
        "LED lighting system",
        "Dance floor",
        "Full bar",
        "Sound system",
        "Theater seating",
      ],
      specifications: {
        doors: 4,
        luggage: 8,
        fuelType: "Premium Gasoline",
        transmission: "Automatic",
      },
      amenities: ["Premium bar", "LED dance floor", "Fog machine", "Laser lights", "Plasma screens", "Premium sound"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Our Luxury Fleet | Premium Vehicles for Every Occasion</title>
        <meta
          name="description"
          content="Discover our premium fleet of vehicles suitable for all occasions and group sizes."
        />
        <meta property="og:title" content="Our Luxury Fleet" />
        <meta property="og:description" content="Premium vehicles for every occasion and group size" />
        <meta property="og:image" content="/luxury-sedan-limousine.jpg" />
        <meta property="og:url" content="/fleet" />
        <meta property="og:type" content="website" />
      </Head>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Our Luxury Fleet</h1>
          <p className="text-xl text-primary-foreground/90">Premium vehicles for every occasion and group size</p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-8 mb-12">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-muted-foreground">Premium Vehicles</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">3-14</div>
              <p className="text-muted-foreground">Passenger Capacity</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Available Service</p>
            </div>
          </div>

          {/* Vehicle Gallery */}
          <div className="space-y-4">
            {vehicles.map((vehicle, idx) => (
              <div
                key={vehicle.id}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Vehicle Header - Clickable */}
                <button
                  onClick={() => setExpandedVehicle(expandedVehicle === idx ? -1 : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users size={16} className="text-accent" />
                        <span>Up to {vehicle.capacity} passengers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap size={16} className="text-accent" />
                        <span>${vehicle.pricePerHour}/hour</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-accent transition-transform ${expandedVehicle === idx ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Vehicle Details - Expandable */}
                {expandedVehicle === idx && (
                  <div className="border-t border-border p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Image */}
                      <div>
                        <img
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.name}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>

                      {/* Details */}
                      <div className="space-y-6">
                        {/* Description */}
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
                        </div>

                        {/* Specifications */}
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Specifications</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Doors</p>
                              <p className="font-semibold">{vehicle.specifications.doors}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Luggage Capacity</p>
                              <p className="font-semibold">{vehicle.specifications.luggage} bags</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Fuel Type</p>
                              <p className="font-semibold">{vehicle.specifications.fuelType}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Transmission</p>
                              <p className="font-semibold">{vehicle.specifications.transmission}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features & Amenities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Standard Features</h4>
                        <ul className="space-y-2">
                          {vehicle.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Premium Amenities</h4>
                        <ul className="space-y-2">
                          {vehicle.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-border">
                      <Link
                        href="/booking"
                        className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      >
                        Book This Vehicle
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Fleet */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Wind size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Well-Maintained</h3>
                  <p className="text-muted-foreground">
                    Every vehicle is meticulously maintained with regular inspections.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Latest Models</h3>
                  <p className="text-muted-foreground">
                    We continuously update our fleet with the newest luxury vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Wind size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Professional Drivers</h3>
                  <p className="text-muted-foreground">
                    Courteous, experienced drivers trained in luxury service standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind size={24} className="text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                  <p className="text-muted-foreground">Premium quality at fair rates with transparent pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability & Booking */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Reserve Your Vehicle?</h2>
          <p className="text-lg text-muted-foreground">
            All our vehicles are available 24/7. Book in advance for guaranteed availability.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Booking Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
