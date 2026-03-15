import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

/* ───────────────────────────── data ───────────────────────────── */

const services = [
  {
    name: "Exterior Painting",
    description: "Our signature service. Complete exterior transformations with premium paints and a 15-year written warranty that guarantees lasting beauty.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Interior Painting",
    description: "Flawless interior finishes with expert color consultations. Clean, detailed work with zero mess left behind. Every room transformed.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    name: "Pressure Washing",
    description: "Restore your property's appearance with professional pressure washing for driveways, walkways, decks, and building exteriors.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Stucco Repair",
    description: "Expert stucco patching, crack repair, and refinishing to protect and beautify your home's exterior walls against Florida weather.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25-3.18a.563.563 0 00-.586 0L.33 15.17m11.09-5.06l-5.25 3.18a.563.563 0 01-.586 0L.33 10.11m11.09 10.12l-5.25-3.18a.563.563 0 01-.586 0L.33 20.23M23.67 15.17l-5.25-3.18a.563.563 0 00-.586 0l-5.25 3.18m11.09-5.06l-5.25 3.18a.563.563 0 01-.586 0l-5.25-3.18m11.09 10.12l-5.25-3.18a.563.563 0 01-.586 0l-5.25 3.18" />
      </svg>
    ),
  },
  {
    name: "Deck & Fence Staining",
    description: "Protect and enhance your outdoor wood surfaces with professional staining and sealing that withstands the Florida sun and humidity.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Color Consultation",
    description: "Expert guidance on color selection to complement your home's architecture, landscape, and neighborhood aesthetic perfectly.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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

const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We visit your property and discuss your vision, preferences, and timeline in detail.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description: "Transparent pricing with no hidden fees. You know exactly what you're paying for.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Expert Execution",
    description: "Premium paints applied with European precision. Meticulous prep work and flawless finishes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description: "We're not done until you're thrilled. A detailed inspection ensures perfection on every surface.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

/* ──────────────────────── star helper ─────────────────────────── */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
        {/* Decorative pattern overlay */}
        <div className="hero-pattern absolute inset-0" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-[10%] h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" />

        {/* Decorative paint brush element - right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            {/* Abstract brush stroke shapes */}
            <div className="animate-float h-[500px] w-[300px]">
              <div className="absolute top-0 right-12 h-64 w-3 rounded-full bg-gradient-to-b from-accent/30 to-transparent rotate-12" />
              <div className="absolute top-10 right-20 h-48 w-2 rounded-full bg-gradient-to-b from-accent-warm/20 to-transparent rotate-6" />
              <div className="absolute top-5 right-6 h-56 w-4 rounded-full bg-gradient-to-b from-accent/20 to-transparent -rotate-6" />
              {/* Paint drips */}
              <div className="absolute top-64 right-12 h-20 w-3 rounded-b-full bg-gradient-to-b from-accent/25 to-transparent" />
              <div className="absolute top-52 right-6 h-32 w-4 rounded-b-full bg-gradient-to-b from-accent/15 to-transparent" />
              {/* Splatters */}
              <div className="absolute top-32 right-28 h-8 w-8 rounded-full bg-accent/10" />
              <div className="absolute top-44 right-2 h-6 w-6 rounded-full bg-accent-warm/10" />
              <div className="absolute top-20 right-32 h-4 w-4 rounded-full bg-accent/15" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Gold accent badge */}
            <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-warm">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              52 Years of European Excellence
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 font-heading text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ opacity: 0 }}>
              Master Painting,{" "}
              <span className="text-gradient-gold">Perfected</span>{" "}
              Over Five Decades
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl" style={{ opacity: 0 }}>
              Borislav Todorovich brings old-world European craftsmanship to every
              brushstroke. Premium Benjamin Moore &amp; Sherwin-Williams paints.
              15-year written warranty. Perfection, guaranteed.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row" style={{ opacity: 0 }}>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-8 py-4 text-base font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:brightness-110 active:scale-[0.98]"
              >
                Get Your Free Estimate
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:+19415366686"
                className="glass inline-flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
              >
                <svg className="h-5 w-5 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (941) 536-6686
              </a>
            </div>

            {/* Social proof strip */}
            <div className="animate-fade-in-up animation-delay-400 mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8" style={{ opacity: 0 }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-accent-warm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-white">5.0</span>
                <span className="text-sm text-white/50">on Yelp</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-sm text-white/50"><strong className="font-semibold text-white">52 years</strong> experience</span>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <span className="hidden text-sm text-white/50 sm:inline"><strong className="font-semibold text-white">15-year</strong> written warranty</span>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-cream to-transparent" />
      </section>

      {/* ────────── 2. STATS BAR ────────── */}
      <section className="bg-surface-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { number: "52+", label: "Years Experience" },
            { number: "15yr", label: "Written Warranty" },
            { number: "5.0", label: "Star Rating" },
            { number: "144", label: "Photos on Yelp" },
          ].map((stat) => (
            <div key={stat.label} className="relative text-center pt-4">
              <div className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-gold" />
              <p className="font-heading text-4xl text-primary sm:text-5xl">{stat.number}</p>
              <p className="mt-2 text-sm font-medium tracking-wide text-foreground/60 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── 3. PROCESS SECTION ────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">How We Work</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Our Proven Process
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              From consultation to completion, every step is designed to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+32px)] right-0 hidden h-px bg-gradient-to-r from-accent/40 to-accent/10 lg:block" />
                )}

                {/* Step number circle */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5">
                  <span className="font-heading text-2xl text-accent">{item.step}</span>
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  {item.icon}
                </div>

                <h3 className="font-heading text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 4. ABOUT / OWNER ────────── */}
      <section className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left: Decorative card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white p-1 shadow-xl">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-primary to-accent opacity-20" />
              <div className="relative rounded-[22px] bg-white p-10 sm:p-14">
                <div className="absolute top-6 right-6 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent uppercase">
                  Since 1974
                </div>

                <div className="text-center">
                  {/* Initials circle */}
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/20">
                    <span className="font-heading text-5xl text-white">BT</span>
                  </div>

                  <h3 className="mt-8 font-heading text-3xl text-primary">Borislav Todorovich</h3>
                  <p className="mt-2 text-sm font-semibold tracking-wide text-accent uppercase">Master Painter &amp; Owner</p>

                  <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />

                  <p className="mt-6 text-base leading-relaxed text-foreground/60">
                    European craftsman who has dedicated over five decades to perfecting
                    the art of exterior and interior painting. Every project reflects a
                    lifetime of mastery.
                  </p>

                  {/* Mini decorative elements */}
                  <div className="mt-8 flex justify-center gap-3">
                    {["#1B365D", "#2A5A8C", "#C8973E", "#E8B960", "#FAF7F2"].map((color) => (
                      <div key={color} className="h-4 w-4 rounded-full shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story text */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Our Story</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Old-World Craftsmanship, Modern Results
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
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
                Our European training means we approach every surface with the
                precision and care it deserves.
              </p>
            </div>

            {/* Mini stat cards */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: "52+", label: "Years" },
                { value: "15yr", label: "Warranty" },
                { value: "5.0", label: "Rating" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-surface-light bg-white p-4 text-center shadow-sm">
                  <p className="font-heading text-2xl text-primary">{s.value}</p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-foreground/50 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 5. SERVICES GRID ────────── */}
      <section id="gallery" className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">What We Do</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Professional painting and restoration services delivered with European precision
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="premium-card group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary-light group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  {service.icon}
                </div>
                <h3 className="mt-6 font-heading text-xl text-primary">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{service.description}</p>
                <div className="mt-5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-2">
                    Learn More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 6. PAINT BRANDS ────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Premium Materials</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl">
              We Use Only Premium Paints
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-foreground/60">
              No shortcuts, no compromises. Only the finest paints trusted by professionals worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Benjamin Moore */}
            <div className="premium-card rounded-2xl border border-surface-light bg-surface-cream p-8">
              <h3 className="font-heading text-2xl text-primary">Benjamin Moore</h3>
              <p className="mt-1 text-sm font-medium text-accent">Premium Quality Since 1883</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                Renowned for rich, true colors and exceptional durability. Perfect for Florida&#39;s demanding climate.
              </p>
              <div className="mt-6 flex gap-3">
                {["#2C3E50", "#E74C3C", "#F39C12", "#1ABC9C", "#ECF0F1", "#8E6F47"].map((c) => (
                  <div key={c} className="h-8 w-8 rounded-full shadow-sm ring-2 ring-white" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            {/* Sherwin-Williams */}
            <div className="premium-card rounded-2xl border border-surface-light bg-surface-cream p-8">
              <h3 className="font-heading text-2xl text-primary">Sherwin-Williams</h3>
              <p className="mt-1 text-sm font-medium text-accent">Industry Leader Since 1866</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                Superior coverage and weather resistance. Engineered to protect and beautify for years.
              </p>
              <div className="mt-6 flex gap-3">
                {["#34495E", "#2980B9", "#27AE60", "#D35400", "#F5F0E8", "#7D6B5D"].map((c) => (
                  <div key={c} className="h-8 w-8 rounded-full shadow-sm ring-2 ring-white" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 7. WHY CHOOSE US ────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light py-24 px-4 sm:px-6 lg:px-8">
        <div className="hero-pattern absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent-warm uppercase">The Boris Difference</p>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
              Why Choose Boris B. Painting
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "52+ Years Experience",
                desc: "European master painter with over five decades of professional expertise in residential and commercial work",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: "15-Year Warranty",
                desc: "Written warranty on all exterior paint work for complete peace of mind and long-term protection",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              },
              {
                title: "Premium Paints Only",
                desc: "Benjamin Moore and Sherwin-Williams exclusively for lasting beauty and superior protection",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />,
              },
              {
                title: "5.0 Star Rated",
                desc: "Perfect ratings from satisfied customers across Yelp with 144 project photos showcasing our quality",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
              },
            ].map((item) => (
              <div key={item.title} className="glass group rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 transition-colors duration-300 group-hover:bg-accent/30">
                  <svg className="h-7 w-7 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 8. REVIEWS ────────── */}
      <section id="reviews" className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Testimonials</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              5.0 rating on Yelp with 144 photos from happy homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="premium-card relative flex flex-col rounded-2xl border-l-4 border-l-accent bg-white p-8 shadow-sm">
                {/* Quote mark */}
                <div className="mb-4 font-heading text-5xl leading-none text-accent/30">&ldquo;</div>

                <Stars count={review.stars} />

                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/70">
                  {review.text}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-surface-light pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-bold text-primary">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{review.name}</p>
                    <div className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium text-green-600">Verified Customer</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 9. SERVICE AREAS ────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Coverage Area</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Proudly Serving Southwest Florida
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Professional painting services throughout the Tampa Bay and Sarasota region
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border-2 border-primary/15 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
              >
                {area}
              </span>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-surface-cream to-accent/5 p-8 shadow-inner">
              <div className="flex items-center justify-center gap-3 text-foreground/40">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm font-medium">Based in North Port, FL - Serving the Greater Tampa Bay Area</span>
              </div>
              {/* Decorative location dots */}
              <div className="relative mx-auto mt-6 h-32">
                <div className="absolute top-4 left-[20%] h-3 w-3 rounded-full bg-accent/40" title="Tampa" />
                <div className="absolute top-8 left-[28%] h-3 w-3 rounded-full bg-accent/40" title="St. Petersburg" />
                <div className="absolute top-14 left-[35%] h-3 w-3 rounded-full bg-accent/40" title="Bradenton" />
                <div className="absolute top-20 left-[42%] h-3 w-3 rounded-full bg-accent/40" title="Sarasota" />
                <div className="absolute top-24 left-[50%] h-3 w-3 rounded-full bg-accent/60" title="Venice" />
                <div className="absolute top-[104px] left-[55%] h-4 w-4 rounded-full bg-accent shadow-md shadow-accent/30 ring-4 ring-accent/20" title="North Port" />
                <div className="absolute top-24 left-[62%] h-3 w-3 rounded-full bg-accent/40" title="Port Charlotte" />
                <div className="absolute top-[100px] left-[68%] h-3 w-3 rounded-full bg-accent/40" title="Punta Gorda" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 10. FAQ ────────── */}
      <section className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Common Questions</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ────────── 11. CONTACT FORM ────────── */}
      <ContactForm />
    </>
  );
}
