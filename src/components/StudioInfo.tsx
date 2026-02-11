import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  ShieldCheck,
  Accessibility,
  Car,
} from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11:00 AM – 9:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 9:00 PM" },
  { day: "Thursday", time: "11:00 AM – 9:00 PM" },
  { day: "Friday", time: "11:00 AM – 10:00 PM" },
  { day: "Saturday", time: "10:00 AM – 10:00 PM" },
  { day: "Sunday", time: "12:00 PM – 7:00 PM" },
];

export function StudioInfo() {
  return (
    <section id="studio" className="py-24 lg:py-32 bg-ink-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            Find Us
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Visit the Studio
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Location + Contact */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-ink-gray border border-ink-medium/50 rounded-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-crimson/10 border border-crimson/20 rounded-sm">
                  <MapPin className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] mb-1">
                    Our Location
                  </h3>
                  <p className="text-base text-smoke">247 Bedford Avenue, Suite 2B</p>
                  <p className="text-base text-smoke">Williamsburg, Brooklyn, NY 11211</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-crimson text-sm hover:text-crimson-light transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-ink-gray border border-ink-medium/50 rounded-sm p-6">
              <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+17185551234"
                  className="flex items-center gap-3 text-smoke hover:text-crimson transition-colors"
                >
                  <Phone className="w-4 h-4 text-crimson" />
                  <span>(718) 555-1234</span>
                </a>
                <a
                  href="mailto:hello@inkcraft-studio.com"
                  className="flex items-center gap-3 text-smoke hover:text-crimson transition-colors"
                >
                  <Mail className="w-4 h-4 text-crimson" />
                  <span>hello@inkcraft-studio.com</span>
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-ink-gray border border-ink-medium/50 rounded-sm">
                <ShieldCheck className="w-5 h-5 text-crimson flex-shrink-0" />
                <span className="text-base text-smoke">Health Dept. Licensed</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-ink-gray border border-ink-medium/50 rounded-sm">
                <Accessibility className="w-5 h-5 text-crimson flex-shrink-0" />
                <span className="text-base text-smoke">ADA Accessible</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-ink-gray border border-ink-medium/50 rounded-sm">
                <Car className="w-5 h-5 text-crimson flex-shrink-0" />
                <span className="text-base text-smoke">Street Parking</span>
              </div>
            </div>
          </div>

          {/* Right: Hours */}
          <div className="bg-ink-gray border border-ink-medium/50 rounded-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-crimson/10 border border-crimson/20 rounded-sm">
                <Clock className="w-5 h-5 text-crimson" />
              </div>
              <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                Studio Hours
              </h3>
            </div>

            <div className="space-y-0">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-3 border-b border-ink-medium/30 last:border-b-0 ${
                    item.time === "Closed" ? "opacity-50" : ""
                  }`}
                >
                  <span className="text-sm text-smoke font-medium">{item.day}</span>
                  <span
                    className={`text-sm ${
                      item.time === "Closed" ? "text-ash" : "text-white"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-crimson/5 border border-crimson/20 rounded-sm">
              <p className="text-xs text-smoke leading-relaxed">
                <span className="text-crimson font-semibold">Walk-ins welcome</span>{" "}
                based on artist availability. For larger pieces and custom work, we
                recommend booking in advance via our{" "}
                <a
                  href="#booking"
                  className="text-crimson hover:text-crimson-light underline underline-offset-2 transition-colors"
                >
                  booking form
                </a>
                .
              </p>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 h-48 bg-ink-dark border border-ink-medium/30 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-crimson/30 mx-auto mb-2" />
                <p className="text-xs text-ash uppercase tracking-wider">
                  Interactive Map
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-crimson hover:text-crimson-light transition-colors mt-1 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
