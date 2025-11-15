import { CheckCircle, Users, Calendar } from "lucide-react"

export default function About() {
  const team = [
    {
      name: "Akeem Hasan",
      role: "Owner & Veteran Mechanic",
      description: "Founder of Car Pros Automotive with decades of expertise in automotive repair and safety systems.",
    },
    {
      name: "Khalid",
      role: "Lead Technician",
      description:
        "Honest professional with integrity. Specialized in electrical diagnostics and safety module programming.",
    },
    {
      name: "Messerette",
      role: "Experienced Technician",
      description: "Known for wonderful work quality and impressive pricing. Expert in airbag and seatbelt repairs.",
    },
  ]

  const milestones = [
    { year: 2006, event: "Serving Nashville since 2006" },
    { year: 2017, event: "Officially incorporated under owner Akeem Hasan" },
    { year: 2024, event: "Continues as trusted local repair specialist" },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Car Pros Automotive</h1>
          <p className="text-lg opacity-90">Our story of trust, integrity, and quality service</p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="/professional-garage-toolboard-with-organized-tools.jpg"
                alt="Car Pros professional garage facility"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Car Pros Automotive, we believe in building lasting relationships with our customers through honesty,
                transparency, and exceptional service quality.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Integrity & Honesty</h3>
                    <p className="text-sm text-muted-foreground">We focus on quality and integrity in every repair</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Customer-First Service</h3>
                    <p className="text-sm text-muted-foreground">
                      100% satisfaction guaranteed with professional and honest work
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Expert Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized expertise in automotive safety systems and repairs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Timeline</h2>
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <Calendar className="w-6 h-6 text-primary" />
                  {idx < milestones.length - 1 && <div className="w-1 h-16 bg-primary/30 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-2xl font-bold text-primary">{milestone.year}</p>
                  <p className="text-lg text-foreground mt-2">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground">Dedicated professionals with integrity and expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-primary flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary-foreground opacity-30" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4 text-sm">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
