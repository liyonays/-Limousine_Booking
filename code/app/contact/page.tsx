import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Contact Us | Elite Limousine",
  description:
    "Get in touch with Elite Limousine. Contact our team for booking inquiries, special requests, or questions about our services.",
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90">
            We're here to help. Reach out anytime with questions or booking requests.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-md hover:shadow-lg transition-shadow space-y-3">
              <div className="flex justify-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Phone size={24} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-center text-lg">Phone</h3>
              <p className="text-center">
                <a href="tel:+15551234567" className="text-accent hover:underline font-semibold">
                  (+251) 923-4567
                </a>
              </p>
              <p className="text-muted-foreground text-center text-sm">Available 24/7</p>
            </div>

            {/* Email */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-md hover:shadow-lg transition-shadow space-y-3">
              <div className="flex justify-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Mail size={24} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-center text-lg">Email</h3>
              <p className="text-center">
                <a href="mailto:Yimesgen_Mengistu@Yimesgen.com" className="text-accent hover:underline font-semibold break-all">
                 Yimesgen@Yimesgen.com
                </a>
              </p>
              <p className="text-muted-foreground text-center text-sm">Response within 2 hours</p>
            </div>

            {/* Address */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-md hover:shadow-lg transition-shadow space-y-3">
              <div className="flex justify-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  <MapPin size={24} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-center text-lg">Address</h3>
              <p className="text-center text-sm">
                123 Luxury Ave, Suite 100
                <br />
                Addis Ababa, NY 10001
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-md hover:shadow-lg transition-shadow space-y-3">
              <div className="flex justify-center">
                <div className="bg-[#25D366]/10 p-4 rounded-full">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
              </div>
              <h3 className="font-semibold text-center text-lg">WhatsApp</h3>
              <p className="text-center text-sm text-muted-foreground">
                Chat with us on WhatsApp for instant responses
              </p>
              <div className="flex justify-center pt-2">
                <WhatsAppContact
                  phoneNumber="15551234567"
                  message="Hi Elite Limousine, I'm interested in your services."
                  label="Open Chat"
                  variant="link"
                  className="text-[#25D366] hover:text-[#1FA855]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Map & Quick Info */}
          <div className="space-y-8">
            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>
              <GoogleMap />
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="/booking"
                  className="block p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors border border-border"
                >
                  <p className="font-semibold text-accent">Book Online</p>
                  <p className="text-sm text-muted-foreground">Reserve your vehicle now</p>
                </a>
                <a
                  href="/fleet"
                  className="block p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors border border-border"
                >
                  <p className="font-semibold text-accent">View Our Fleet</p>
                  <p className="text-sm text-muted-foreground">Browse our luxury vehicles</p>
                </a>
                <a
                  href="/services"
                  className="block p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors border border-border"
                >
                  <p className="font-semibold text-accent">Our Services</p>
                  <p className="text-sm text-muted-foreground">Explore our offerings</p>
                </a>
                {/* WhatsApp Quick Action */}
                <WhatsAppContact
                  phoneNumber="15551234567"
                  message="Hi Elite Limousine, I have a question about booking a limousine."
                  label="💬 Chat on WhatsApp"
                  variant="button"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Support */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media for updates, special offers, and behind-the-scenes content
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Facebook
              </a>
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Twitter
              </a>
              <a
                href="#"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
              {/* WhatsApp Social Link */}
              <WhatsAppContact
                phoneNumber="15551234567"
                message="Hi Elite Limousine, I'd like to learn more about your services."
                label="WhatsApp"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-card rounded-lg p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive offers, updates, and special promotions delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      <Footer />
    </div>
  )
}
