"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, Car, AlertCircle } from "lucide-react"

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    service: "",
    issueDescription: "",
    preferredDate: "",
    preferredTime: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        service: "",
        issueDescription: "",
        preferredDate: "",
        preferredTime: "",
      })
    }, 3000)
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Service</h1>
          <p className="text-lg opacity-90">Schedule an appointment with our expert technicians</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && (
            <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-4 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold mb-1">Booking Submitted!</h3>
                <p>Thank you! We will contact you to confirm your appointment shortly.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border rounded-lg p-8">
            {/* Personal Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-accent" />
                Your Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="John Doe"
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
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="(615) 635-3939"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Car className="w-6 h-6 text-accent" />
                Vehicle Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="vehicleYear" className="block text-sm font-medium mb-2">
                      Year *
                    </label>
                    <input
                      type="text"
                      id="vehicleYear"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="2019"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleMake" className="block text-sm font-medium mb-2">
                      Make *
                    </label>
                    <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Honda"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleModel" className="block text-sm font-medium mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Civic"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Service Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">Select a service...</option>
                    <option value="airbag-reset">Airbag/SRS Reset</option>
                    <option value="seatbelt-repair">Seatbelt Repair</option>
                    <option value="diagnostics">Electrical Diagnostics</option>
                    <option value="collision">Collision & Bodywork</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="issueDescription" className="block text-sm font-medium mb-2">
                    Issue Description *
                  </label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Describe the issue with your vehicle..."
                  />
                </div>
              </div>
            </div>

            {/* Appointment Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-accent" />
                Preferred Appointment
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                      Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    >
                      <option value="">Select a time...</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Open Mon-Fri 9am-6pm, Sat 9am-3pm
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-md transition-colors text-lg"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
