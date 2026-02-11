import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink-black border-t border-ink-medium/30">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
                <span className="text-crimson">Ink</span>
                <span className="text-white">Craft</span>
              </span>
            </a>
            <p className="text-base text-smoke leading-relaxed mb-6">
              Brooklyn&apos;s premier tattoo and piercing studio. Where bold vision meets
              meticulous artistry. Established 2015.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ink-light rounded-sm text-ash hover:text-crimson hover:border-crimson/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-ink-light rounded-sm text-ash hover:text-crimson hover:border-crimson/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#services", label: "Services" },
                { href: "#artists", label: "Our Artists" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#aftercare", label: "Aftercare Guide" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#booking", label: "Book a Session" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-smoke hover:text-crimson transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Custom Tattoos",
                "Cover-ups",
                "Fine Line",
                "Traditional",
                "Realism",
                "Piercings",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-smoke hover:text-crimson transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17185551234"
                  className="flex items-center gap-2.5 text-sm text-smoke hover:text-crimson transition-colors"
                >
                  <Phone className="w-4 h-4 text-crimson flex-shrink-0" />
                  (718) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@inkcraft-studio.com"
                  className="flex items-center gap-2.5 text-sm text-smoke hover:text-crimson transition-colors"
                >
                  <Mail className="w-4 h-4 text-crimson flex-shrink-0" />
                  hello@inkcraft-studio.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-smoke">
                  <MapPin className="w-4 h-4 text-crimson flex-shrink-0 mt-0.5" />
                  <span>
                    247 Bedford Avenue, Suite 2B
                    <br />
                    Williamsburg, Brooklyn, NY 11211
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ash">
            &copy; {new Date().getFullYear()} InkCraft Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-ash hover:text-smoke transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-ash hover:text-smoke transition-colors">
              Terms of Service
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-ink-light rounded-sm text-ash hover:text-crimson hover:border-crimson/50 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
