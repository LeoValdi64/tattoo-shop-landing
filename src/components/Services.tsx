import { Pen, Layers, Feather, Anchor, Eye, CircleDot } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Custom Tattoos",
    description:
      "One-of-a-kind designs created specifically for you. Our artists work directly with you to bring your vision to life with originality and precision.",
    price: "From $200/hr",
  },
  {
    icon: Layers,
    title: "Cover-ups",
    description:
      "Transform old or unwanted tattoos into stunning new artwork. Our cover-up specialists excel at creative solutions for any existing piece.",
    price: "From $250/hr",
  },
  {
    icon: Feather,
    title: "Fine Line",
    description:
      "Delicate, intricate designs with single-needle precision. Perfect for minimalist artwork, botanical designs, and detailed linework.",
    price: "From $150/hr",
  },
  {
    icon: Anchor,
    title: "Traditional",
    description:
      "Bold outlines, vivid colors, and iconic imagery. Classic American and neo-traditional styles that stand the test of time.",
    price: "From $180/hr",
  },
  {
    icon: Eye,
    title: "Realism",
    description:
      "Photo-realistic portraits and hyper-detailed artwork that captures life on skin. Black & grey or full color realism at its finest.",
    price: "From $300/hr",
  },
  {
    icon: CircleDot,
    title: "Piercings",
    description:
      "Professional body piercings with premium titanium and gold jewelry. Sterile environment, expert technique, and thorough aftercare guidance.",
    price: "From $50+",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-ink-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Our Services
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            From bold traditional pieces to delicate fine-line work, our talented
            artists specialize in a wide range of styles and techniques.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 bg-ink-gray border border-ink-medium/50 rounded-sm transition-all duration-500 hover:border-crimson/30 hover:bg-ink-gray/80"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-crimson transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-ink-light rounded-sm group-hover:border-crimson/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-crimson" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-smoke leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-xs uppercase tracking-wider text-crimson font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-ash">
            All prices are estimates. Final pricing depends on size, detail, and placement.{" "}
            <a href="#booking" className="text-crimson hover:text-crimson-light transition-colors underline underline-offset-4">
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
}
