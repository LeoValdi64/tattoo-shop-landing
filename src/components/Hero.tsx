import { ChevronDown, MapPin, Award, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-ink-black">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-transparent to-ink-black" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-crimson/5 via-transparent to-crimson/5" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-transparent via-crimson/30 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-8 w-px h-32 bg-gradient-to-b from-transparent via-crimson/30 to-transparent hidden lg:block" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-crimson/30 bg-crimson/5 mb-8">
          <Award className="w-4 h-4 text-crimson" />
          <span className="text-xs uppercase tracking-[0.2em] text-crimson font-medium">
            Est. 2015 — Brooklyn, NY
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-heading)]">
          <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] mb-2">
            Your Story.
          </span>
          <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-crimson leading-[0.9]">
            Our Art.
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-crimson/60" />
          <div className="w-2 h-2 rotate-45 border border-crimson/60" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-crimson/60" />
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-smoke max-w-2xl mx-auto leading-relaxed mb-10">
          Premium custom tattoos and piercings crafted by Brooklyn&apos;s finest artists.
          Where bold vision meets meticulous artistry.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#booking"
            className="group relative px-8 py-4 bg-crimson text-white font-semibold uppercase tracking-wider text-sm rounded-sm overflow-hidden transition-all duration-300 hover:bg-crimson-dark hover:shadow-[0_0_30px_rgba(220,20,60,0.3)]"
          >
            Book Your Session
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-ink-light text-smoke font-semibold uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:border-crimson/50 hover:text-white hover:bg-crimson/5"
          >
            View Our Work
          </a>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ash">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-crimson" />
            <span>Williamsburg, Brooklyn</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-ink-light" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-crimson" />
            <span>Tue – Sat, 11am – 9pm</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-ink-light" />
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-crimson" />
            <span>10+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ash hover:text-crimson transition-colors"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
