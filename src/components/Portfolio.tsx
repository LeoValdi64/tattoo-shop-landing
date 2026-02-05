import { ZoomIn, Grid3X3 } from "lucide-react";

const portfolioItems = [
  {
    title: "Dragon Sleeve",
    artist: "Marcus Rivera",
    style: "Realism",
    color: "from-red-900/40 to-ink-gray",
  },
  {
    title: "Botanical Wreath",
    artist: "Yuki Tanaka",
    style: "Fine Line",
    color: "from-emerald-900/40 to-ink-gray",
  },
  {
    title: "Skull & Roses",
    artist: "Elena Vasquez",
    style: "Neo-Traditional",
    color: "from-purple-900/40 to-ink-gray",
  },
  {
    title: "Eagle Chest Piece",
    artist: "Darius Thompson",
    style: "Traditional",
    color: "from-amber-900/40 to-ink-gray",
  },
  {
    title: "Portrait — Woman",
    artist: "Marcus Rivera",
    style: "Black & Grey",
    color: "from-zinc-700/40 to-ink-gray",
  },
  {
    title: "Koi Fish Half-Sleeve",
    artist: "Yuki Tanaka",
    style: "Japanese",
    color: "from-blue-900/40 to-ink-gray",
  },
  {
    title: "Sacred Geometry",
    artist: "Elena Vasquez",
    style: "Geometric",
    color: "from-teal-900/40 to-ink-gray",
  },
  {
    title: "Old School Panther",
    artist: "Darius Thompson",
    style: "Traditional",
    color: "from-orange-900/40 to-ink-gray",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-ink-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Portfolio
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            A showcase of our artists&apos; finest work. Every piece tells a story, every
            detail matters.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Placeholder artwork */}
              <div
                className={`aspect-square bg-gradient-to-br ${item.color} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
              >
                <div className="text-center p-4">
                  <Grid3X3 className="w-8 h-8 text-white/20 mx-auto mb-3" />
                  <p className="text-white/30 text-xs uppercase tracking-wider">
                    {item.style}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <ZoomIn className="w-8 h-8 text-crimson mb-3" />
                <h4 className="text-white font-semibold text-sm text-center mb-1">
                  {item.title}
                </h4>
                <p className="text-ash text-xs text-center">by {item.artist}</p>
                <span className="mt-2 px-2.5 py-1 text-[10px] uppercase tracking-wider border border-crimson/30 text-crimson rounded-sm">
                  {item.style}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-crimson/40 text-crimson hover:bg-crimson hover:text-white transition-all duration-300 text-sm uppercase tracking-wider rounded-sm"
          >
            <Grid3X3 className="w-4 h-4" />
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
