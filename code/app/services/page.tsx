import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services | Elite Limousine",
  description: "Explore our comprehensive range of luxury transportation services for any occasion.",
}

export default function Services() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Limos",
      description:
        "Make your special day unforgettable with our elegant wedding limo services. From bride arrival to reception transport, we handle every detail with care.",
      features: [
        "Champagne service",
        "Flower arrangements",
        "Red carpet service",
        "Customized routes",
        "Photo opportunities",
      ],
      image: "/wedding-limousine-ceremony.jpg",
    },
    {
      id: "corporate",
      title: "Corporate Transportation",
      description:
        "Professional transportation for business needs. Impress clients and employees with premium corporate limo services for all your business events.",
      features: [
        "Executive suites",
        "Conference calls",
        "On-time guarantee",
        "Business-class service",
        "Flexible scheduling",
      ],
      image: "/corporate-business-limousine.jpg",
    },
    {
      id: "airport",
      title: "Airport Transfer",
      description:
        "Arrive refreshed and on time. Our airport transfer service ensures smooth, comfortable journeys to and from the airport.",
      features: ["Flight tracking", "Luggage assistance", "Meet & greet", "Fixed pricing", "Climate control"],
      image: "/airport-limousine-service.jpg",
    },
    {
      id: "events",
      title: "Special Events",
      description:
        "Celebrate any occasion with style. From proms to party nights, tours to anniversaries, we provide memorable transportation experiences.",
      features: [
        "Entertainment packages",
        "Multi-stop service",
        "Group rates",
        "Customizable decorations",
        "Sound system",
      ],
      image: "/celebration-event-limousine.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-primary-foreground/90">
            Comprehensive luxury transportation solutions for every occasion
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                <div>
                  <h4 className="font-semibold mb-3">Included Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Book This Service <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Services CTA */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground">
            Don't see exactly what you need? We specialize in creating tailored transportation solutions for unique
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
