"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-xl border transition-all duration-300 ${
            openIndex === i
              ? "border-accent/30 bg-white shadow-md shadow-accent/5"
              : "border-surface-light bg-white hover:border-accent/20"
          }`}
        >
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-base font-semibold text-primary sm:text-lg">
              {item.question}
            </span>
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                openIndex === i
                  ? "bg-accent/10 text-accent rotate-180"
                  : "bg-surface-cream text-foreground/40"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="border-t border-surface-light px-6 pb-6 pt-4">
              <div className="flex gap-3">
                <div className="mt-1 h-full w-0.5 flex-shrink-0 rounded-full bg-accent/30" />
                <p className="text-base leading-relaxed text-foreground/60">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
