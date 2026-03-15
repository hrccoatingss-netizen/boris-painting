import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

/* ───────────────────────────── data ───────────────────────────── */

const services = [
  {
    name: "Exterior Painting",
    description: "Our signature service. Complete exterior transformations with premium paints and a 15-year written warranty.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Interior Painting",
    description: "Flawless interior finishes with expert color consultations. Clean, detailed work with zero mess left behind.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    name: "Pressure Washing",
    description: "Restore your property's appearance with professional pressure washing for driveways, decks, and exteriors.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Stucco Repair",
    description: "Expert stucco patching, crack repair, and refinishing to protect and beautify your home's exterior.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25-3.18a.563.563 0 00-.586 0L.33 15.17m11.09-5.06l-5.25 3.18a.563.563 0 01-.586 0L.33 10.11m11.09 10.12l-5.25-3.18a.563.563 0 01-.586 0L.33 20.23M23.67 15.17l-5.25-3.18a.563.563 0 00-.586 0l-5.25 3.18m11.09-5.06l-5.25 3.18a.563.563 0 01-.586 0l-5.25-3.18m11.09 10.12l-5.25-3.18a.563.563 0 01-.586 0l-5.25 3.18" />
      </svg>
    ),
  },
  {
    name: "Deck & Fence Staining",
    description: "Protect and enhance your outdoor wood surfaces with professional staining and sealing services.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Color Consultation",
    description: "Expert guidance on color selection to complement your home's architecture and surroundings.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Michael R.",
    stars: 5,
    text: "Boris did an amazing job on our exterior. The attention to detail is incredible. You can tell he has decades of experience. Our house looks brand new!",
  },
  {
    name: "Patricia S.",
    stars: 5,
    text: "Best painter we've ever hired. Boris is meticulous, professional, and his prices are very fair for the quality you get. The 15-year warranty gives us peace of mind.",
  },
  {
    name: "David & Karen L.",
    stars: 5,
    text: "We had our entire home exterior repainted. Boris used Benjamin Moore paint and the finish is absolutely flawless. Neighbors keep asking who did the work!",
  },
];

const faqItems = [
  {
    question: "What makes Boris B. Painting different from other painters?",
    answer: "With 52 years of European painting experience, Boris brings old-world craftsmanship to every project. We use only premium paints from Benjamin Moore and Sherwin-Williams, and every exterior project comes with a 15-year written warranty.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! All estimates are completely free with no obligation. We'll come to your property, assess the project, and provide a detailed, transparent quote.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve North Port, Venice, Sarasota, Bradenton, Englewood, Port Charlotte, St. Petersburg, and the greater Tampa Bay area.",
  },
  {
    question: "What paint brands do you use?",
    answer: "We exclusively use Benjamin Moore and Sherwin-Williams paints. These premium products ensure long-lasting color, superior coverage, and excellent durability against Florida's weather.",
  },
  {
    question: "How long does a typical exterior painting project take?",
    answer: "Most residential exteriors are completed within 3-7 days depending on the size of the home and surface preparation needed. We'll provide a clear timeline during your estimate.",
  },
  {
    question: "What does your 15-year warranty cover?",
    answer: "Our written 15-year warranty covers peeling, blistering, and fading on all exterior paint work. We stand behind the quality of our materials and craftsmanship.",
  },
];

const serviceAreas = [
  "North Port",
  "Venice",
  "Sarasota",
  "Bradenton",
  "Englewood",
  "Port Charlotte",
  "St. Petersburg",
  "Tampa",
  "Punta Gorda",
  "Osprey",
];

/* ──────────────────────── star helper ─────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════ PAGE ══════════════════════════════ */

export default function Home() {
  return (
    <>
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

      {/* ────────── 1. HERO ────────── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
        {/* Decorative paint brush pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-accent blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Warranty badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-5 py-2 text-sm font-bold text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>15-Year Written Warranty</span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              52 Years of European Painting Excellence
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Master painter Borislav Todorovich brings old-world craftsmanship
              to Southwest Florida. Premium Benjamin Moore &amp; Sherwin-Williams
              paints. Rated 5.0 on Yelp.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-accent-dark active:scale-[0.98]"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+19415366686"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-[0.98]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (941) 536-6686
              </a>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Free estimates within 24 hours &middot; No obligation
            </p>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">5.0</span>
                <span className="text-sm text-white/60">on Yelp</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <span className="text-sm text-white/60"><strong className="text-white">52 years</strong> experience</span>
              <div className="h-4 w-px bg-white/30 hidden sm:block" />
              <span className="hidden text-sm text-white/60 sm:inline"><strong className="text-white">15-year</strong> warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 2. STATISTICS ────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { number: "52+", label: "Years Experience" },
            { number: "15yr", label: "Written Warranty" },
            { number: "5.0", label: "Star Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-5xl font-extrabold text-primary sm:text-6xl">{stat.number}</p>
              <p className="mt-2 text-lg font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── 3. WARRANTY BANNER ────────── */}
      <section className="bg-gradient-to-r from-primary to-[#2A5A8C] py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            15-Year Written Warranty
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            We stand behind every exterior project with a 15-year written warranty.
            Using only Benjamin Moore and Sherwin-Williams paints ensures your
            home stays beautiful for years to come.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-accent-dark active:scale-[0.98]"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      {/* ────────── 4. ABOUT / TEAM ────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder - elegant card */}
          <div className="relative overflow-hidden rounded-2xl bg-warm p-12 shadow-lg">
            <div className="absolute top-4 right-4 rounded-full bg-accent/20 px-4 py-1 text-xs font-bold text-accent">
              Since 1974
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-primary">Borislav Todorovich</h3>
              <p className="mt-1 text-sm font-medium text-accent">Master Painter &amp; Owner</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                European craftsman painting since 1974. Over five decades of
                perfecting the art of exterior and interior painting.
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Old-World Craftsmanship, Modern Results
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Boris B. Painting LLC is led by Borislav Todorovich, a European
                master painter who has been perfecting his craft since 1974.
                With over 52 years of hands-on experience, Boris brings
                unmatched attention to detail and quality to every project.
              </p>
              <p>
                Specializing in exterior painting, we use only premium Benjamin
                Moore and Sherwin-Williams paints to ensure lasting beauty and
                protection for your home. Every exterior project is backed by
                our industry-leading 15-year written warranty.
              </p>
              <p>
                Based in North Port, Florida, we proudly serve homeowners
                throughout Southwest Florida, from Sarasota to Tampa Bay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 5. SERVICES ────────── */}
      <section id="gallery" className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
              Professional painting and restoration services with European precision
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 6. TRUSTED BRANDS ────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            We Use Only Premium Paints
          </h2>
          <p className="mt-3 text-gray-600">
            Benjamin Moore and Sherwin-Williams exclusively. No shortcuts, no compromises.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-16">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-primary">Benjamin Moore</p>
              <p className="mt-1 text-sm text-gray-500">Premium Quality</p>
            </div>
            <div className="h-12 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-extrabold text-primary">Sherwin-Williams</p>
              <p className="mt-1 text-sm text-gray-500">Industry Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 7. WHY CHOOSE US ────────── */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose Boris B. Painting
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "52+ Years Experience",
                desc: "European master painter with over five decades of professional expertise",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "15-Year Warranty",
                desc: "Written warranty on all exterior paint work for your peace of mind",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: "Premium Paints Only",
                desc: "Benjamin Moore and Sherwin-Williams exclusively for lasting results",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />,
              },
              {
                title: "5.0 Star Rated",
                desc: "Perfect ratings from satisfied customers across Yelp and Facebook",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 8. REVIEWS ────────── */}
      <section id="reviews" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              5.0 rating on Yelp with 144 photos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
                <Stars count={review.stars} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-primary">{review.name}</p>
                  <p className="text-xs text-gray-400">Verified Customer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 9. SERVICE AREAS ────────── */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Proudly Serving Southwest Florida
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
            Professional painting services throughout the Tampa Bay and Sarasota region
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 10. FAQ ────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ────────── 11. CONTACT FORM ────────── */}
      <ContactForm />
    </>
  );
}
