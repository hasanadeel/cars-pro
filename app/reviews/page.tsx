import { Star, MessageCircle } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      name: "David Martinez",
      rating: 5,
      date: "October 2024",
      text: "Fast, honest, and professional service. 100% satisfaction guaranteed. This is exactly what you want in an auto repair shop.",
      source: "Google Reviews",
    },
    {
      name: "Maria Thompson",
      rating: 5,
      date: "September 2024",
      text: "Messerette does a wonderful job with the airbag work. Impressive prices and excellent attention to detail.",
      source: "Birdeye Reviews",
    },
    {
      name: "James K.",
      rating: 5,
      date: "August 2024",
      text: "Mr Khalid is an honest man with integrity. He explained everything clearly and the work was done right the first time.",
      source: "Birdeye Reviews",
    },
    {
      name: "Sarah Mitchell",
      rating: 5,
      date: "July 2024",
      text: "Trusted auto repair shop with professional and honest service. My vehicle runs better than ever. Highly recommended!",
      source: "MapQuest Reviews",
    },
    {
      name: "Robert Johnson",
      rating: 5,
      date: "June 2024",
      text: "Best place to fix your airbags. Saved me a lot of money compared to the dealership. Great team!",
      source: "Google Reviews",
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      date: "May 2024",
      text: "Excellent service and very professional. Car Pros knows their stuff when it comes to safety systems.",
      source: "Birdeye Reviews",
    },
  ]

  const stats = [
    { label: "4.4 Stars", value: "Average Rating" },
    { label: "100+", value: "Satisfied Customers" },
    { label: "18+ Years", value: "In Business" },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-lg opacity-90">What Nashville's customers say about Car Pros Automotive</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-primary mb-1">{stat.label}</p>
                <p className="text-muted-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                  <p className="text-xs text-accent font-semibold mt-1">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Had a Great Experience?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Share your feedback on Google, Yelp, or Birdeye to help other Nashville drivers find trusted service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=Car+Pros+Automotive+Nashville"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-bold transition-colors"
            >
              Leave a Google Review
            </a>
            <a
              href="#"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-bold transition-colors"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
