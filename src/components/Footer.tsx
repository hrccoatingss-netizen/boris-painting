import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/exterior-painting" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Boris<span className="text-accent">.</span>
              </span>
              <span className="ml-1 text-xs font-medium tracking-widest text-gray-400 uppercase">Painting</span>
            </Link>
            <p className="mb-3 text-base leading-relaxed text-gray-300">
              European master painter since 1974
            </p>
            <p className="text-sm text-gray-400">
              Serving Southwest Florida with pride
            </p>

            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/borispainting" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.yelp.com/biz/boris-b-painting-north-port" target="_blank" rel="noopener noreferrer" aria-label="Find us on Yelp" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 7.918 7.918 0 012.112 3.2c.27.752-.272 1.456-.442 1.511zm-6.16 1.877l4.56 2.623c.87.5.56 1.78-.47 1.93a7.88 7.88 0 01-3.83-.48c-.71-.28-.87-1.17-.53-1.67l.27-.4zm-1.5-3.2l-2.8-4.27c-.53-.81.1-1.87 1.06-1.77a8.04 8.04 0 013.42 1.37c.63.45.55 1.33.15 1.82l-1.83 2.85zm-2.94 2.18l-5.09-.93c-.97-.18-1.13-1.54-.22-1.96a7.92 7.92 0 013.6-1.06c.78-.03 1.28.77 1.05 1.47l-.34.48zm1.56 2.03l1.67 4.77c.32.91-.65 1.7-1.47 1.2a7.93 7.93 0 01-2.82-2.76c-.4-.67.05-1.45.77-1.57l1.85-.64z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 transition-colors hover:text-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+19415366686" className="text-sm text-gray-300 transition-colors hover:text-accent">
                  (941) 536-6686
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:expertpaintersfl@gmail.com" className="text-sm text-gray-300 transition-colors hover:text-accent">
                  expertpaintersfl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-300">North Port, FL 34287</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-300">Mon - Sat: 7 AM - 6 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-center text-xs text-gray-400 sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <span>&copy; {new Date().getFullYear()} Boris B. Painting LLC. All rights reserved.</span>
          <span>Serving North Port, Venice, Sarasota &amp; Tampa Bay</span>
        </div>
      </div>
    </footer>
  );
}
