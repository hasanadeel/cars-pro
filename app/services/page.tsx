import { Shield, Wrench, Zap, AlertCircle, TrendingDown, Lock, CheckCircle, Award } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Airbag/SRS Module Reset & Programming",
      description: "Expert reset of deployed airbag modules to clear crash data and restore functionality",
      details: [
        "Clear crash data from SRS control units",
        "Reprogram modules for full airbag system operation",
        "Avoid 80% cost savings vs. replacement",
        "OEM standards compliance",
      ],
      benefit: "Save up to 80% compared to buying new parts",
    },
    {
      icon: Wrench,
      title: "Seatbelt Pretensioner Repair",
      description: "Rebuild or replace deployed seatbelt pretensioners and damaged webbing",
      details: [
        "Inspect pretensioner mechanism",
        "Rebuild or replace one-use devices",
        "Repair damaged webbing",
        "Restore retraction and lock functionality",
      ],
      benefit: "Restore safety belt function and reliability",
    },
    {
      icon: Zap,
      title: "Electrical Diagnostics & Programming",
      description: "Complex electrical troubleshooting including crash codes and module reprogramming",
      details: [
        "Advanced crash code scanning",
        "Wiring issue diagnosis and repair",
        "Module reprogramming for multiple systems",
        "Safety system validation",
      ],
      benefit: "Professional diagnostic expertise",
    },
    {
      icon: AlertCircle,
      title: "Collision & Bodywork",
      description: "General auto body repairs and painting for post-accident collision damage",
      details: [
        "Collision damage assessment",
        "Panel repair and replacement",
        "Professional painting services",
        "Like-new restoration",
      ],
      benefit: "Return your vehicle to like-new condition",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90">Comprehensive automotive repair specializing in safety systems</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 ${idx < services.length - 1 ? "border-b border-border" : ""}`}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-10 h-10 text-accent" />
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="bg-secondary rounded-lg p-6 mb-6">
                      <p className="font-semibold text-primary text-center">{service.benefit}</p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-4">What We Do:</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Car Pros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6">
              <TrendingDown className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold mb-2">Cost Savings</h3>
              <p className="text-sm text-muted-foreground">Up to 80% savings on safety repairs vs. replacement</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <Lock className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold mb-2">OEM Standards</h3>
              <p className="text-sm text-muted-foreground">All repairs meet manufacturer specifications</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">18 years of professional automotive expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Need a Service Quote?</h2>
          <p className="text-lg opacity-90 mb-8">Contact us today for a free estimate on your automotive repair</p>
          <a
            href="/booking"
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-bold transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  )
}
