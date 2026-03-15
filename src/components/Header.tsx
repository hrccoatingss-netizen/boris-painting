"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Pressure Washing", href: "/services/pressure-washing" },
  { name: "Stucco Repair", href: "/services/stucco-repair" },
  { name: "Deck & Fence Staining", href: "/services/deck-fence-staining" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Gallery", href: "/#gallery" },
  { name: "Reviews", href: "/#reviews" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Text Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
            Boris<span className="text-accent">.</span>
          </span>
          <span className="ml-1 text-xs font-medium tracking-widest text-gray-400 uppercase">Painting</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${pathname.startsWith("/services") ? "text-primary" : "text-gray-700"}`}
                >
                  Services
                  <svg className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-gray-100 bg-white py-2 shadow-xl" onMouseLeave={() => setServicesOpen(false)}>
                    {services.map((service) => (
                      <Link key={service.href} href={service.href} onClick={() => setServicesOpen(false)} className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 hover:text-primary ${pathname === service.href ? "font-semibold text-primary" : "text-gray-700"}`}>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${pathname === link.href && link.href === "/" ? "text-primary" : "text-gray-700"}`}>
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+19415366686" className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (941) 536-6686
          </a>
          <Link href="/#contact" onClick={(e) => handleAnchorClick(e, "/#contact")} className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-dark hover:shadow-md">
            Get Free Estimate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="relative z-50 rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 lg:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Mobile Slide-out */}
      <div className={`fixed right-0 top-0 z-40 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-20">
          <div className="space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">
                    Services
                    <svg className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 space-y-0.5 border-l-2 border-gray-200 pl-4">
                      {services.map((service) => (
                        <Link key={service.href} href={service.href} onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }} className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-gray-50 ${pathname === service.href ? "font-semibold text-primary" : "text-gray-600"}`}>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)} className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <a href="tel:+19415366686" className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-gray-50">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (941) 536-6686
            </a>
          </div>
          <div className="mt-4 px-4">
            <Link href="/#contact" onClick={(e) => handleAnchorClick(e, "/#contact")} className="block w-full rounded-lg bg-accent py-3.5 text-center text-base font-semibold text-white shadow-sm transition-all hover:bg-accent-dark">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
