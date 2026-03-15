import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";

/* ───────────────────────────── data ───────────────────────────── */

const services = [
  {
    name: "Exterior Painting",
    description: "Our signature service. Complete exterior transformations with premium paints and a 15-year written warranty that guarantees lasting beauty.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    href: "/services/exterior-painting",
  },
  {
    name: "Interior Painting",
    description: "Flawless interior finishes with expert color consultations. Clean, detailed work with zero mess left behind. Every room transformed.",
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80",
    href: "/services/interior-painting",
  },
  {
    name: "Pressure Washing",
    description: "Restore your property's appearance with professional pressure washing for driveways, walkways, decks, and building exteriors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    href: "/services/pressure-washing",
  },
  {
    name: "Stucco Repair",
    description: "Expert stucco patching, crack repair, and refinishing to protect and beautify your home's exterior walls against Florida weather.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    href: "/services/stucco-repair",
  },
  {
    name: "Deck & Fence Staining",
    description: "Protect and enhance your outdoor wood surfaces with professional staining and sealing that withstands the Florida sun and humidity.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    href: "/services/deck-fence-staining",
  },
  {
    name: "Color Consultation",
    description: "Expert guidance on color selection to complement your home's architecture, landscape, and neighborhood aesthetic perfectly.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    href: "/#contact",
  },
];

const googleReviews = [
  {
    name: "Michael R.",
    date: "2 months ago",
    stars: 5,
    text: "Boris did an amazing job on our exterior. The attention to detail is incredible. You can tell he has decades of experience. Our house looks brand new!",
  },
  {
    name: "Patricia S.",
    date: "3 months ago",
    stars: 5,
    text: "Best painter we've ever hired. Boris is meticulous, professional, and his prices are very fair for the quality you get. The 15-year warranty gives us peace of mind.",
  },
  {
    name: "David & Karen L.",
    date: "1 month ago",
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
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description: "Transparent pricing with no hidden fees. You know exactly what you're paying for.",
  },
  {
    step: 3,
    title: "Expert Execution",
    description: "Premium paints applied with European precision. Meticulous prep work and flawless finishes.",
  },
  {
    step: 4,
    title: "Final Walkthrough",
    description: "We're not done until you're thrilled. A detailed inspection ensures perfection on every surface.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", alt: "Beautiful painted home exterior" },
  { src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80", alt: "Interior painting project" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Exterior house painting" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living room interior painting" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Beautiful kitchen remodel" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", alt: "Modern bathroom renovation" },
];

/* ──────────────────────── star helper ─────────────────────────── */

function Stars({ count, size = "h-5 w-5" }: { count: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`${size} ${i < count ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* Half star for 4.5 rating */
function GoogleStars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* Half star */}
      <svg className="h-5 w-5" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
        <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
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

      {/* ────────── 1. HERO WITH FULL-BLEED IMAGE ────────── */}
      <section className="hero-bg relative flex min-h-screen items-center">
        {/* Extra overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Logo + Google Badge Row */}
            <div className="animate-fade-in-up mb-8 flex flex-wrap items-center gap-6">
              {/* Company Logo */}
              <img
                src="https://img77.uenicdn.com/image/upload/v1574757495/business/d9b662c41304458fa94ed2000b4c9a65.jpg"
                alt="Boris B. Painting LLC Logo"
                className="h-16 w-16 rounded-full border-2 border-white/30 object-cover shadow-lg sm:h-20 sm:w-20"
                loading="eager"
              />
              {/* Google Rating Badge */}
              <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
                {/* Google G icon */}
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white">4.5</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20">
                      <defs><linearGradient id="hs"><stop offset="50%" stopColor="#FACC15" /><stop offset="50%" stopColor="#9CA3AF" /></linearGradient></defs>
                      <path fill="url(#hs)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-xs text-white/70">33 Reviews</span>
                </div>
              </div>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 font-heading text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ opacity: 0 }}>
              Master Painting,{" "}
              <span className="text-gradient-gold">Perfected</span>{" "}
              Over Five Decades
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ opacity: 0 }}>
              &ldquo;Call the Doctor for your Painting needs.&rdquo; Borislav Todorovich brings
              old-world European craftsmanship to every brushstroke. Premium Benjamin Moore
              &amp; Sherwin-Williams paints with up to 20-year warranty options.
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
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-cream to-transparent" />
      </section>

      {/* ────────── 2. TRUST BAR ────────── */}
      <section className="bg-surface-cream py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-surface-light bg-white px-8 py-6 shadow-sm sm:gap-10 md:gap-14">
            {[
              { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "52+ Years Experience" },
              { icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z", label: "4.5 Google Rating" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Licensed & Insured" },
              { icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z", label: "15-Year Warranty" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-sm font-semibold text-primary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 3. SERVICES WITH IMAGES ────────── */}
      <section id="services" className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
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
              <Link
                key={service.name}
                href={service.href}
                className="service-card-overlay group relative flex h-80 flex-col justify-end rounded-2xl p-8 shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                />
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl text-white">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-warm transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 4. PROCESS SECTION ────────── */}
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

                <h3 className="font-heading text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 5. BEFORE / AFTER ────────── */}
      <section className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Results That Speak</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Before &amp; After
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              See the transformations our clients love. Every project is a masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Before */}
            <div className="before-after-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                  alt="Home exterior before painting"
                  loading="lazy"
                  className="h-80 w-full object-cover sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block rounded-full bg-red-500/90 px-4 py-1.5 text-sm font-bold text-white">
                    BEFORE
                  </span>
                  <p className="mt-2 text-sm text-white/80">Faded, peeling exterior paint with visible wear</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="before-after-card group">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                  alt="Home exterior after Boris painting"
                  loading="lazy"
                  className="h-80 w-full object-cover sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block rounded-full bg-green-500/90 px-4 py-1.5 text-sm font-bold text-white">
                    AFTER
                  </span>
                  <p className="mt-2 text-sm text-white/80">Fresh Benjamin Moore paint with flawless finish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 6. MEET BORIS ────────── */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          {/* Left: Image + Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"
                alt="Professional painter at work - representing Boris' European craftsmanship"
                loading="lazy"
                className="h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img77.uenicdn.com/image/upload/v1574757495/business/d9b662c41304458fa94ed2000b4c9a65.jpg"
                    alt="Boris B. Painting Logo"
                    loading="lazy"
                    className="h-16 w-16 rounded-full border-2 border-white/40 object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-2xl text-white">Borislav Todorovich</h3>
                    <p className="text-sm font-semibold text-accent-warm">Master Painter &amp; Owner</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-10 rounded-2xl bg-accent px-5 py-3 shadow-lg shadow-accent/30">
              <p className="text-2xl font-bold text-white">52+</p>
              <p className="text-xs font-semibold text-white/80">Years</p>
            </div>
          </div>

          {/* Right: Story text */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Meet &ldquo;The Doctor&rdquo;</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Old-World Craftsmanship, Modern Results
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/70">
              <p>
                Boris B. Painting LLC is led by Borislav &ldquo;Boris&rdquo; Todorovich, a European
                master painter who has been perfecting his craft since 1974. Known to clients
                as &ldquo;The Doctor&rdquo; of painting, Boris brings unmatched attention to detail
                and quality to every project.
              </p>
              <p>
                Specializing in exterior painting, we use only premium Benjamin
                Moore and Sherwin-Williams paints to ensure lasting beauty and
                protection for your home. Every exterior project is backed by
                our industry-leading warranty options of 5, 10, 15, or even 20 years.
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
                { value: "20yr", label: "Max Warranty" },
                { value: "4.5", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-surface-light bg-surface-cream p-4 text-center shadow-sm">
                  <p className="font-heading text-2xl text-primary">{s.value}</p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-foreground/50 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────── 7. GOOGLE REVIEWS WIDGET ────────── */}
      <section id="reviews" className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Google Reviews Header */}
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-6 flex items-center gap-4 rounded-2xl border border-surface-light bg-white px-8 py-6 shadow-sm">
              {/* Google G */}
              <svg className="h-10 w-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-foreground">4.5</span>
                  <span className="text-lg text-foreground/50">out of 5</span>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleStars />
                  <span className="text-sm text-foreground/50">Based on 33 reviews</span>
                </div>
              </div>
            </div>
            <h2 className="font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {googleReviews.map((review) => (
              <div key={review.name} className="google-review-card rounded-2xl border border-surface-light bg-white p-6 shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{review.name}</p>
                    <p className="text-xs text-foreground/40">{review.date}</p>
                  </div>
                  {/* Google G small */}
                  <svg className="ml-auto h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                {/* Stars */}
                <div className="mt-3">
                  <Stars count={review.stars} size="h-4 w-4" />
                </div>
                {/* Review text */}
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/search?q=Boris+B+Painting+North+Port+FL+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-light bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:shadow-md"
            >
              See All Reviews on Google
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ────────── 8. PHOTO GALLERY ────────── */}
      <section id="gallery" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase">Our Work</p>
            <h2 className="mt-3 font-heading text-3xl text-primary sm:text-4xl lg:text-5xl">
              Project Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
              Browse through our recent projects and see the quality for yourself
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item group relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-72"
                />
                <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/90 p-3 shadow-lg">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 9. PAINT BRANDS ────────── */}
      <section className="bg-surface-cream py-24 px-4 sm:px-6 lg:px-8">
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
            <div className="premium-card rounded-2xl border border-surface-light bg-white p-8">
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
            <div className="premium-card rounded-2xl border border-surface-light bg-white p-8">
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

      {/* ────────── 10. WHY CHOOSE US (with background image) ────────── */}
      <section className="cta-bg relative py-24 px-4 sm:px-6 lg:px-8">
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
                icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Up to 20-Year Warranty",
                desc: "Written warranty options of 5, 10, 15, or 20 years on all paint work for complete peace of mind",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Premium Paints Only",
                desc: "Benjamin Moore and Sherwin-Williams exclusively for lasting beauty and superior protection",
                icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
              },
              {
                title: "4.5 Star Google Rating",
                desc: "Trusted by homeowners across Southwest Florida with 33 Google reviews and growing",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
              },
            ].map((item) => (
              <div key={item.title} className="glass group rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 transition-colors duration-300 group-hover:bg-accent/30">
                  <svg className="h-7 w-7 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── 11. SERVICE AREAS ────────── */}
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

      {/* ────────── 12. FAQ ────────── */}
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

      {/* ────────── 13. CONTACT FORM ────────── */}
      <ContactForm />
    </>
  );
}
