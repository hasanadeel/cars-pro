"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend or email service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90">Get in touch with Nashville's trusted automotive repair specialists</p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">
                1640 Antioch Pike
                <br />
                Antioch (Nashville)
                <br />
                TN 37013
              </p>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-6">
              <Phone className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+16156353939" className="hover:text-primary">
                  (615) 635-3939
                </a>
                <br />
                <a href="tel:+16152514508" className="hover:text-primary">
                  (615) 251-4508
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <Clock className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Mon-Fri: 9am-6pm
                <br />
                Sat: 9am-3pm
                <br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mb-16 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5678!2d-86.67!3d36.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864a3d84a1a1a1d%3A0x1a1a1a1a1a1a1a1a!2s1640%20Antioch%20Pike%2C%20Nashville%2C%20TN%2037013!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded">
              Thank you! We've received your message and will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-background rounded-lg p-8 border border-border">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="(615) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="Tell us about your vehicle issue or service request..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
