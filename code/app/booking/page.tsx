import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { CheckCircle, Clock, Phone } from "lucide-react"

export const metadata = {
  title: "Book Your Limousine | Elite Limousine",
  description:
    "Reserve your luxury limousine online. Easy booking process for weddings, corporate events, airport transfers, and special occasions.",
}

export default function Booking() {
  const bookingSteps = [
    {
      icon: CheckCircle,
      title: "Select Your Details",
      description: "Choose your vehicle, date, time, and locations",
    },
    {
      icon: Phone,
      title: "We Confirm",
      description: "Our team will contact you within 24 hours to confirm",
    },
    {
      icon: Clock,
      title: "Enjoy Your Ride",
      description: "Sit back and enjoy our premium luxury service",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Book Your Luxury Ride</h1>
          <p className="text-xl text-primary-foreground/90">
            Easy online reservation for your perfect limousine experience
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-accent/10 p-4 rounded-full">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 3-5 days in advance to ensure vehicle availability. Rush bookings may be available upon request.",
              },
              {
                q: "Can I modify my booking?",
                a: "Yes, you can modify your booking by contacting us at least 24 hours before your scheduled time. Modifications are subject to availability.",
              },
              {
                q: "What is your cancellation policy?",
                a: "Cancellations made 48 hours before the booking receive a full refund. Cancellations within 48 hours may incur charges.",
              },
              {
                q: "Do you offer discounts for group bookings?",
                a: "Yes! We offer special rates for multiple vehicle bookings and long-duration rentals. Contact our team for custom quotes.",
              },
              {
                q: "Is there a minimum booking time?",
                a: "Most services have a 2-3 hour minimum. Airport transfers may have different minimums. Contact us for specific details.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, debit cards, and bank transfers. A deposit is required to confirm your booking.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Have Questions?</h2>
          <p className="text-xl text-primary-foreground/90">Our booking specialists are available 24/7 to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              📞 (555) 123-4567
            </a>
            <a
              href="mailto:booking@elitelimo.com"
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              ✉️ booking@elitelimo.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
