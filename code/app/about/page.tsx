import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Yimesgen  Limousine | Luxury Transportation",
  description: "Learn about our company mission, values, and commitment to excellence in luxury transportation.",
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">About Yimesgen  Limousine</h1>
          <p className="text-xl text-primary-foreground/90">Your trusted partner in luxury transportation since 2015</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2015, Yimesgen  Limousine emerged from a passion for providing exceptional luxury transportation
              experiences. What started as a small fleet has grown into one of the region's most trusted and respected
              limousine services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that every journey deserves to be special. Whether it's a wedding, corporate event, or airport
              transfer, we're committed to making every moment memorable with our premium vehicles, professional
              drivers, and attentive service.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional luxury transportation experiences that exceed expectations through reliability,
                professionalism, and attention to detail.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Customer satisfaction always</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Safety and reliability</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent" />
                  <span>Professional integrity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-muted/30 rounded-lg p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">9+</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">50+</div>
              <p className="text-muted-foreground">Luxury Vehicles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">99%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Professional Drivers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our drivers are carefully selected, thoroughly vetted, and regularly trained. They embody
                professionalism, courtesy, and expertise in every journey.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Well-Maintained Fleet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every vehicle in our fleet is meticulously maintained and regularly serviced. We invest in the latest
                models to ensure comfort and reliability.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated support team is available around the clock to assist with bookings, changes, or special
                requests.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Competitive Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We offer transparent pricing with no hidden fees. Quality luxury transportation at fair rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
