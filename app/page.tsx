import Link from "next/link"
import { Wrench, Shield, Zap, AlertCircle, Star, CheckCircle } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: "Airbag/SRS Reset",
      description: "Expert module reset & programming to clear crash data and restore safety systems.",
    },
    {
      icon: Wrench,
      title: "Seatbelt Repair",
      description: "Rebuild or replace deployed pretensioners and damaged webbing for full functionality.",
    },
    {
      icon: Zap,
      title: "Electrical Diagnostics",
      description: "Complex electrical troubleshooting, crash code scanning, and module reprogramming.",
    },
    {
      icon: AlertCircle,
      title: "Collision & Bodywork",
      description: "General auto body repairs and painting for post-accident collision damage.",
    },
  ]

  const testimonials = [
    {
      text: "Fast, honest, and professional service. 100% satisfaction guaranteed.",
      author: "David M.",
      rating: 5,
    },
    {
      text: "Messerette does a wonderful job with impressive prices.",
      author: "Maria T.",
      rating: 5,
    },
    {
      text: "Mr Khalid is an honest man with integrity. Highly recommend!",
      author: "James K.",
      rating: 5,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">Nashville's Airbag & Safety Experts</h1>
              <p className="text-lg opacity-90 mb-8 text-pretty">
                Welcome to Car Pros Automotive – trusted auto repair specialists serving Nashville since 2006.
                Professional and honest service, 100% customer satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-bold text-center transition-colors"
                >
                  Book Service Now
                </Link>
                <Link
                  href="/services"
                  className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-6 py-3 rounded-md font-bold text-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-72 md:h-96 bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/mechanic-working-on-car-airbag-system.jpg"
                alt="Professional mechanic working on airbag repair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise in automotive safety repairs with cost-effective solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>

          {/* Key Benefits */}
          <div className="mt-16 bg-secondary rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Save Up to 80%</h3>
                  <p className="text-sm text-muted-foreground">
                    Resetting airbag modules costs significantly less than replacement
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">OEM Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    All repairs meet manufacturer specifications for safety and quality
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Trusted Service</h3>
                  <p className="text-sm text-muted-foreground">18 years of honest, professional service to Nashville</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-lg text-muted-foreground">What our satisfied customers say about Car Pros</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-primary">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Vehicle Serviced?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with our expert technicians today
          </p>
          <Link
            href="/booking"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-bold transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
