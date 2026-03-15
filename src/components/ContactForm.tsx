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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setForm({ firstName: "", lastName: "", phone: "", email: "", service: "", message: "" });
  }

  return (
    <section id="contact" className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get Your Free Estimate
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Ready to transform your home? Fill out the form below and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {status === "success" && (
          <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-6 text-center">
            <svg className="mx-auto mb-3 h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-green-800">Thank You!</h3>
            <p className="mt-2 text-green-700">
              Your estimate request has been submitted. We&apos;ll get back to you within 24 hours.
            </p>
            <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900">
              Submit another request
            </button>
          </div>
        )}

        {status !== "success" && (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-primary">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} placeholder="John" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-primary">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} placeholder="Doe" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-primary">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(941) 555-1234" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-primary">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="mb-1 block text-sm font-medium text-primary">
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select id="service" name="service" required value={form.service} onChange={handleChange} className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                <option value="" disabled>Select a service...</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-primary">
                Message / Project Details
              </label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project..." className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>

            <button type="submit" disabled={status === "submitting"} className="mt-8 w-full rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white transition hover:bg-accent-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
              {status === "submitting" ? "Submitting..." : "Request Free Estimate"}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Free estimates with no obligation. We respond within 24 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
