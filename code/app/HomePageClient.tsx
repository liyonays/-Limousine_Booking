"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Star, MapPin, Users, Zap } from "lucide-react"

export function HomePageClient() {
  const features = [
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced, courteous, and professionally trained drivers.",
    },
    {
      icon: Zap,
      title: "Luxury Fleet",
      description: "Newest models with premium amenities and comfort.",
    },
    {
      icon: MapPin,
      title: "Reliable Service",
      description: "On-time pickups and drop-offs, every single time.",
    },
  ]

  const services = [
    {
      title: "Wedding Limos",
      description: "Make your special day unforgettable with our elegant wedding limo services.",
      image: "/elegant-wedding-limousine.png",
    },
    {
      title: "Corporate Transport",
      description: "Professional transportation for business meetings, conferences, and events.",
      image: "/corporate-limousine.jpg",
    },
    {
      title: "Airport Transfer",
      description: "Arrive refreshed with our premium airport pick-up and drop-off service.",
      image: "/airport-limo-service.jpg",
    },
    {
      title: "Special Events",
      description: "Celebrate any occasion with style - parties, proms, tours, and more.",
      image: "/celebration-limousine.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
            Luxury Transportation at Its Finest
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance">
            Experience elegance and comfort with Yimesgen Limousine. Premier transportation for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/booking"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Book Your Ride <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-balance">Featured Vehicles</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Discover our premium collection of luxury vehicles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Luxury Sedan", image: "a.png", capacity: 3, price: "$150/hr" },
              { name: "Stretch Limousine", image: "b.png", capacity: 8, price: "$250/hr" },
              { name: "SUV Limousine", image: "c.png", capacity: 6, price: "$200/hr" },
            ].map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img
                    src={`/${vehicle.image}`}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{vehicle.name}</h3>
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <p>Capacity: {vehicle.capacity} passengers</p>
                    <p className="text-accent font-semibold">{vehicle.price}</p>
                  </div>
                  <Link
                    href="/fleet"
                    className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-balance">Why Choose Yimesgen Limousine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-balance">Our Services</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Tailored transportation solutions for every need
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 aspect-square md:aspect-auto bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-accent font-semibold hover:underline inline-flex items-center gap-1 w-fit"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-balance">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Wedding Bride",
                content: "Yimesgen Limousine made our wedding day perfect. The service was impeccable!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Corporate Manager",
                content: "Professional, reliable, and always on time. Our preferred choice for business travel.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Event Planner",
                content: "Outstanding customer service and beautiful vehicles. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-balance">Ready to Experience Luxury?</h2>
          <p className="text-xl text-primary-foreground/90">
            Book your next ride with Yimesgen Limousine and enjoy premium comfort and service.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
