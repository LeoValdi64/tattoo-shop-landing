"use client";

import { useState } from "react";
import { Send, CalendarDays, User, Mail, Phone, MessageSquare, Palette, Users } from "lucide-react";

const serviceOptions = [
  "Custom Tattoo",
  "Cover-up",
  "Fine Line",
  "Traditional",
  "Realism",
  "Japanese",
  "Piercing",
  "Consultation Only",
];

const artistOptions = [
  "No Preference",
  "Marcus \"Shade\" Rivera",
  "Yuki Tanaka",
  "Elena Vasquez",
  "Darius \"D-Block\" Thompson",
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    artist: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-ink-black relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-crimson/3 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-crimson/3 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-crimson font-medium">
            Get Started
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white">
            Book Your Session
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-crimson/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-crimson" />
            <div className="w-12 h-px bg-crimson/40" />
          </div>
          <p className="mt-6 text-lg text-smoke max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and we&apos;ll
            get back to you within 24 hours to discuss your project.
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-12 bg-ink-dark border border-crimson/30 rounded-sm">
            <CalendarDays className="w-12 h-12 text-crimson mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-heading)] mb-2">
              Request Received
            </h3>
            <p className="text-smoke max-w-md mx-auto">
              Thanks, {formData.name}! We&apos;ll review your request and get back to
              you within 24 hours. Check your email at{" "}
              <span className="text-crimson">{formData.email}</span> for our response.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-ink-dark border border-ink-medium/50 rounded-sm p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <User className="w-4 h-4 text-crimson" />
                  Full Name <span className="text-crimson">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white placeholder-ash rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <Mail className="w-4 h-4 text-crimson" />
                  Email <span className="text-crimson">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white placeholder-ash rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <Phone className="w-4 h-4 text-crimson" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(718) 555-0000"
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white placeholder-ash rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <Palette className="w-4 h-4 text-crimson" />
                  Service Type <span className="text-crimson">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors appearance-none"
                >
                  <option value="" className="text-ash">
                    Select a service...
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-ink-gray">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Artist */}
              <div className="md:col-span-2">
                <label
                  htmlFor="artist"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <Users className="w-4 h-4 text-crimson" />
                  Preferred Artist
                </label>
                <select
                  id="artist"
                  name="artist"
                  value={formData.artist}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors appearance-none"
                >
                  <option value="" className="text-ash">
                    Select an artist...
                  </option>
                  {artistOptions.map((option) => (
                    <option key={option} value={option} className="bg-ink-gray">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm text-smoke mb-2"
                >
                  <MessageSquare className="w-4 h-4 text-crimson" />
                  Tell Us About Your Idea <span className="text-crimson">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your tattoo idea, size, placement, reference images, or any questions you have..."
                  className="w-full px-4 py-3 bg-ink-gray border border-ink-light text-white placeholder-ash rounded-sm focus:outline-none focus:border-crimson/50 focus:ring-1 focus:ring-crimson/30 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ash">
                <span className="text-crimson">*</span> Required fields. We typically
                respond within 24 hours.
              </p>
              <button
                type="submit"
                className="group flex items-center gap-2 px-8 py-4 bg-crimson text-white font-semibold uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:bg-crimson-dark hover:shadow-[0_0_30px_rgba(220,20,60,0.3)]"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
