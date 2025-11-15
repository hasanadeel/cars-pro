import Link from "next/link"
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Car Pros Automotive</h3>
            <p className="text-sm opacity-90">Nashville's trusted airbag & safety repair specialists since 2006.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:underline">
                  Book Service
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+16156353939">(615) 635-3939</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+16152514508">(615) 251-4508</a>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  1640 Antioch Pike
                  <br />
                  Antioch, TN 37013
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9am-6pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Sat: 9am-3pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 flex justify-between items-center">
          <p className="text-sm opacity-75">&copy; 2025 Car Pros Automotive. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
