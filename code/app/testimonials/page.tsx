import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export const metadata = {
  title: "Testimonials | Elite Limousine",
  description: "Read what our happy customers say about their Elite Limousine experiences.",
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Wedding Bride",
      content:
        "Elite Limousine made our wedding day absolutely perfect. The driver was professional and courteous, and the vehicle was immaculate. Couldn't have asked for better service!",
      rating: 5,
      image: "/woman-profile.png",
    },
    {
      name: "Michael Chen",
      role: "Corporate Executive",
      content:
        "We use Elite Limousine for all our corporate transportation needs. Professional, reliable, and always on time. Our clients are always impressed.",
      rating: 5,
      image: "/man-profile.png",
    },
    {
      name: "Emma Williams",
      role: "Event Planner",
      content:
        "Outstanding customer service from start to finish. The team went above and beyond to make sure everything was perfect for our client's special event.",
      rating: 5,
      image: "/woman-profile.png",
    },
    {
      name: "James Rodriguez",
      role: "Frequent Traveler",
      content:
        "The airport transfer service is seamless. They always track my flight and are ready when I land. Makes travel so much easier.",
      rating: 5,
      image: "/man-profile.png",
    },
    {
      name: "Lisa Anderson",
      role: "Wedding Planner",
      content:
        "Worked with Elite Limousine for dozens of weddings. They're always dependable and bring a touch of elegance to every event.",
      rating: 5,
      image: "/woman-profile.png",
    },
    {
      name: "David Thompson",
      role: "Event Coordinator",
      content:
        "Best limo service in the area. Great fleet, fantastic drivers, and competitive pricing. Highly recommended for any occasion.",
      rating: 5,
      image: "/man-profile.png",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">What Our Clients Say</h1>
          <p className="text-xl text-primary-foreground/90">Trusted by hundreds of satisfied customers</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-lg shadow-md p-6 space-y-4 border border-border/50">
                <div className="flex gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-muted"
                  />
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Experience the Elite Difference</h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied customers who trust Elite Limousine for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
