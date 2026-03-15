"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Exterior Painting",
  "Interior Painting",
  "Pressure Washing",
  "Stucco Repair",
  "Deck & Fence Staining",
  "Color Consultation",
  "Other",
] as const;

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setForm({ firstName: "", lastName: "", phone: "", email: "", service: "", message: "" });
  }

  return (
    <section id="contact" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left side: Contact info card */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Get In Touch</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl">
              Get Your Free Estimate
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              Ready to transform your home? Fill out the form and
              we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact info card */}
            <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-light p-8 shadow-xl shadow-primary/10">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                    <svg className="h-5 w-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Phone</p>
                    <a href="tel:+19415366686" className="mt-1 block text-sm font-semibold text-white transition-colors hover:text-accent-warm">
                      (941) 536-6686
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                    <svg className="h-5 w-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Email</p>
                    <a href="mailto:expertpaintersfl@gmail.com" className="mt-1 block text-sm font-semibold text-white transition-colors hover:text-accent-warm">
                      expertpaintersfl@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                    <svg className="h-5 w-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Hours</p>
                    <p className="mt-1 text-sm font-semibold text-white">Mon - Fri: 8AM - 5PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                    <svg className="h-5 w-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-white/40 uppercase">Address</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      8197 Chesebro Ave<br />
                      North Port, FL 34287
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side: Form */}
          <div className="lg:col-span-3">
            {status === "success" && (
              <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <svg className="mx-auto mb-4 h-14 w-14 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-heading text-2xl text-green-800">Thank You!</h3>
                <p className="mt-2 text-green-700">
                  Your estimate request has been submitted. We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-green-700 underline hover:text-green-900">
                  Submit another request
                </button>
              </div>
            )}

            {status !== "success" && (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-surface-light bg-surface-cream p-8 shadow-sm sm:p-10">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-primary">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-primary">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-primary">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(941) 555-1234"
                      className="w-full rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-primary">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                  >
                    <option value="" disabled>Select a service...</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full resize-y rounded-xl border border-surface-light bg-white px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 w-full rounded-xl bg-gradient-gold px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Request Free Estimate"
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-foreground/40">
                  Free estimates with no obligation. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
