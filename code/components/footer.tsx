import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yimesgen  Limousine</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium luxury transportation services for unforgettable occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#wedding" className="hover:text-accent transition-colors">
                  Wedding Limos
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="hover:text-accent transition-colors">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/services#airport" className="hover:text-accent transition-colors">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-accent transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>(+251) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>Yimesgen@Yimesgen.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>
                  123 Luxury Ave, Suite 100
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">&copy; 2025 Yimesgen Limousine. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">
              Facebook
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
