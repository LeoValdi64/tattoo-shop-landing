import { Instagram, Award, Palette, Clock } from "lucide-react";

const artists = [
  {
    name: "Marcus \"Shade\" Rivera",
    role: "Founder & Lead Artist",
    specialty: "Black & Grey Realism",
    experience: "15 years",
    bio: "Marcus founded InkCraft Studio with a vision to elevate tattoo artistry in Brooklyn. Known for his breathtaking photorealistic portraits and masterful shading technique.",
    styles: ["Realism", "Portraits", "Black & Grey"],
    instagram: "@shade.ink",
  },
  {
    name: "Yuki Tanaka",
    role: "Senior Artist",
    specialty: "Fine Line & Japanese",
    experience: "12 years",
    bio: "Trained in traditional Japanese tattooing before mastering contemporary fine-line work. Yuki brings an unparalleled precision and cultural depth to every piece.",
    styles: ["Fine Line", "Japanese", "Botanical"],
    instagram: "@yuki.fineline",
  },
  {
    name: "Elena Vasquez",
    role: "Artist & Piercer",
    specialty: "Neo-Traditional & Color",
    experience: "9 years",
    bio: "Elena's vibrant neo-traditional style has earned her a devoted following. She's also our certified piercing specialist with expertise in curated ear projects.",
    styles: ["Neo-Traditional", "Color Work", "Piercings"],
    instagram: "@elena.tattoos",
  },
  {
    name: "Darius \"D-Block\" Thompson",
    role: "Artist",
    specialty: "Traditional & Lettering",
    experience: "8 years",
    bio: "A true craftsman of classic American traditional and bold lettering. Darius brings old-school authenticity with a modern edge to every session.",
    styles: ["Traditional", "Lettering", "Bold Line"],
    instagram: "@dblock.trad",
  },
];

export function Artists() {
  return (
    <section id="artists" className="py-24 lg:py-32 bg-ink-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            The Team
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Our Artists
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            Meet the talented artists behind InkCraft Studio. Each brings a unique style
            and years of dedicated experience.
          </p>
        </div>

        {/* Artists grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group relative bg-ink-dark border border-ink-medium/50 rounded-sm overflow-hidden transition-all duration-500 hover:border-crimson/30"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Avatar placeholder */}
                <div className="sm:w-48 h-48 sm:h-auto bg-ink-gray flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-transparent" />
                  <div className="w-20 h-20 rounded-full border-2 border-crimson/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-crimson font-[family-name:var(--font-heading)]">
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .filter((c) => c && c === c.toUpperCase() && c.match(/[A-Z]/))
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
                        {artist.name}
                      </h3>
                      <p className="text-crimson text-sm font-medium">{artist.role}</p>
                    </div>
                    <a
                      href="#"
                      className="text-ash hover:text-crimson transition-colors"
                      aria-label={`${artist.name} Instagram`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-base text-smoke leading-relaxed mb-4">{artist.bio}</p>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-ash">
                      <Palette className="w-3.5 h-3.5 text-crimson" />
                      <span>{artist.specialty}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ash">
                      <Clock className="w-3.5 h-3.5 text-crimson" />
                      <span>{artist.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ash">
                      <Award className="w-3.5 h-3.5 text-crimson" />
                      <span>Certified</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {artist.styles.map((style) => (
                      <span
                        key={style}
                        className="px-2.5 py-1 text-xs uppercase tracking-wider border border-ink-light text-ash rounded-sm"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
