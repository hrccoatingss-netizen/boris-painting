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
    <div className="mx-auto max-w-3xl divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 text-base font-semibold text-primary sm:text-lg">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-96 pb-5" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
