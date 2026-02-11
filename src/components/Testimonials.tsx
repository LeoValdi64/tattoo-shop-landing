import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jordan Mitchell",
    rating: 5,
    service: "Full Sleeve — Realism",
    artist: "Marcus Rivera",
    text: "Marcus spent three sessions on my memorial sleeve and the result is absolutely jaw-dropping. The detail in the portrait work brought tears to my eyes. InkCraft is not just a tattoo shop — it's an art studio.",
  },
  {
    name: "Aisha Patel",
    rating: 5,
    service: "Fine Line Botanicals",
    artist: "Yuki Tanaka",
    text: "Yuki's fine line work is on another level. My wildflower piece is so delicate and precise, people think it's drawn on. The studio is immaculate and everyone made me feel completely comfortable for my first tattoo.",
  },
  {
    name: "Ryan O'Connor",
    rating: 5,
    service: "Traditional Eagle",
    artist: "Darius Thompson",
    text: "Darius absolutely nailed my traditional eagle chest piece. Bold lines, perfect saturation, exactly what I wanted. The vibe at InkCraft is welcoming without being pretentious. Already planning my next one.",
  },
  {
    name: "Valentina Cruz",
    rating: 5,
    service: "Cover-up & Ear Piercings",
    artist: "Elena Vasquez",
    text: "Elena transformed a terrible old tattoo into the most beautiful neo-traditional piece. She also did my curated ear project — all six piercings healed perfectly. Her color work is absolutely stunning.",
  },
  {
    name: "Marcus Chen",
    rating: 5,
    service: "Japanese Half-Sleeve",
    artist: "Yuki Tanaka",
    text: "Flew in from LA specifically for Yuki's Japanese work and it was worth every mile. The attention to cultural authenticity combined with modern technique is unmatched. InkCraft sets the standard.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-ink-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            Client Stories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Reviews
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about their InkCraft experience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-ink-gray border border-ink-medium/50 rounded-sm transition-all duration-500 hover:border-crimson/30 ${
                index >= 3 ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-crimson/20 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-crimson text-crimson"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-base text-smoke leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-ink-medium/50 pt-4">
                <p className="text-white font-semibold text-sm">
                  {testimonial.name}
                </p>
                <p className="text-crimson text-xs mt-0.5">{testimonial.service}</p>
                <p className="text-ash text-xs mt-0.5">
                  Artist: {testimonial.artist}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-crimson text-crimson" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-ink-light" />
          <p className="text-sm text-ash">
            Based on 200+ reviews across Google, Yelp, and Instagram
          </p>
        </div>
      </div>
    </section>
  );
}
