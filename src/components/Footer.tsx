import Link from "next/link";

const serviceLinks = [
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "Stucco Repair", href: "/services/stucco-repair" },
  { name: "Deck & Fence Staining", href: "/services/deck-fence-staining" },
  { name: "Color Consultation", href: "/#contact" },
];

const serviceAreas = [
  "North Port",
  "Venice",
  "Sarasota",
  "Bradenton",
  "St. Petersburg",
  "Tampa",
  "Port Charlotte",
  "Englewood",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary to-[#122440] text-white">
      <div className="footer-pattern absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <img
                src="https://img77.uenicdn.com/image/upload/v1574757495/business/d9b662c41304458fa94ed2000b4c9a65.jpg"
                alt="Boris B. Painting LLC Logo"
                className="h-12 w-12 rounded-full border border-white/20 object-cover"
                loading="lazy"
              />
              <div>
                <span className="font-heading text-2xl tracking-tight text-white">
                  Boris<span className="text-accent">.</span>
                </span>
                <span className="ml-1 text-xs font-medium tracking-widest text-white/40 uppercase">Painting</span>
              </div>
            </Link>
            <p className="mb-4 text-base leading-relaxed text-white/60">
              European master painter since 1974. Over 52 years of
              old-world craftsmanship brought to Southwest Florida.
            </p>
            <p className="text-sm font-medium text-accent">
              15-Year Written Warranty on All Exterior Work
            </p>

            <div className="mt-8 flex gap-3">
              <a href="https://www.facebook.com/p/Boris-Painting-100064179065194/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/20">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.yelp.com/biz/boris-b-painting-north-port" target="_blank" rel="noopener noreferrer" aria-label="Find us on Yelp" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/20">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.918 7.918 0 012.112 3.2c.27.752-.272 1.456-.442 1.511zm-6.16 1.877l4.56 2.623c.87.5.56 1.78-.47 1.93a7.88 7.88 0 01-3.83-.48c-.71-.28-.87-1.17-.53-1.67l.27-.4zm-1.5-3.2l-2.8-4.27c-.53-.81.1-1.87 1.06-1.77a8.04 8.04 0 013.42 1.37c.63.45.55 1.33.15 1.82l-1.83 2.85zm-2.94 2.18l-5.09-.93c-.97-.18-1.13-1.54-.22-1.96a7.92 7.92 0 013.6-1.06c.78-.03 1.28.77 1.05 1.47l-.34.48zm1.56 2.03l1.67 4.77c.32.91-.65 1.7-1.47 1.2a7.93 7.93 0 01-2.82-2.76c-.4-.67.05-1.45.77-1.57l1.85-.64z" />
                </svg>
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-accent/20">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/50 transition-colors duration-300 hover:text-accent-warm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/50">{area}, FL</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+19415366686" className="text-sm text-white/50 transition-colors hover:text-accent-warm">
                  (941) 536-6686
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:expertpaintersfl@gmail.com" className="text-sm text-white/50 transition-colors hover:text-accent-warm">
                  expertpaintersfl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-white/50">
                  8197 Chesebro Ave<br />
                  North Port, FL 34287
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-white/50">Mon - Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center text-xs text-white/30 sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <span>&copy; {new Date().getFullYear()} Boris B. Painting LLC. All rights reserved.</span>
          <span>Serving North Port, Venice, Sarasota &amp; Tampa Bay with Pride</span>
        </div>
      </div>
    </footer>
  );
}
