import {
  Droplets,
  Sun,
  ShieldCheck,
  Timer,
  Heart,
  AlertTriangle,
} from "lucide-react";

const aftercareSteps = [
  {
    icon: ShieldCheck,
    title: "Keep It Clean",
    description:
      "Gently wash your new tattoo 2-3 times daily with fragrance-free antibacterial soap and lukewarm water. Pat dry with a clean paper towel — never rub.",
    time: "Day 1–14",
  },
  {
    icon: Droplets,
    title: "Moisturize",
    description:
      "Apply a thin layer of unscented, alcohol-free moisturizer or recommended tattoo aftercare balm. Keep the skin hydrated but avoid over-saturating.",
    time: "Day 3–30",
  },
  {
    icon: Sun,
    title: "Avoid Sun Exposure",
    description:
      "Keep your fresh tattoo out of direct sunlight. Once healed, always apply SPF 50+ sunscreen to preserve color vibrancy and prevent fading.",
    time: "Ongoing",
  },
  {
    icon: Timer,
    title: "No Soaking",
    description:
      "Avoid swimming pools, hot tubs, baths, and saunas for at least 2-3 weeks. Brief showers are fine — just don't let the water stream directly on it.",
    time: "Week 1–3",
  },
  {
    icon: Heart,
    title: "Let It Heal",
    description:
      "Peeling and light itching are normal. Never pick, scratch, or peel flaking skin. Let the healing process happen naturally for the best results.",
    time: "Week 1–4",
  },
  {
    icon: AlertTriangle,
    title: "Watch for Issues",
    description:
      "Some redness and swelling is normal initially. Contact us or a medical professional if you notice excessive swelling, pus, or persistent redness.",
    time: "If needed",
  },
];

export function Aftercare() {
  return (
    <section id="aftercare" className="py-24 lg:py-32 bg-ink-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            Essential Guide
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Aftercare
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            Proper aftercare is crucial for a beautiful, long-lasting tattoo. Follow these
            steps to ensure optimal healing.
          </p>
        </div>

        {/* Aftercare grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aftercareSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative p-6 bg-ink-dark border border-ink-medium/50 rounded-sm transition-all duration-500 hover:border-crimson/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 flex items-center justify-center bg-crimson/10 border border-crimson/20 rounded-sm">
                      <Icon className="w-5 h-5 text-crimson" />
                    </div>
                    <span className="absolute -top-2 -left-2 w-5 h-5 bg-ink-black border border-crimson/40 rounded-full flex items-center justify-center text-xs text-crimson font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                      {step.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-crimson">
                      {step.time}
                    </span>
                  </div>
                </div>
                <p className="text-base text-smoke leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Download note */}
        <div className="mt-12 text-center p-6 border border-ink-medium/30 bg-ink-dark/50 rounded-sm max-w-2xl mx-auto">
          <ShieldCheck className="w-8 h-8 text-crimson mx-auto mb-3" />
          <p className="text-base text-smoke">
            Every client receives a printed aftercare guide after their session. Have
            questions during healing?{" "}
            <a
              href="tel:+17185551234"
              className="text-crimson hover:text-crimson-light transition-colors underline underline-offset-4"
            >
              Give us a call
            </a>{" "}
            — we&apos;re always happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
