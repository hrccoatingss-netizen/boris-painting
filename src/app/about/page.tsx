import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Boris B. Painting LLC",
  description:
    "Meet Borislav Todorovich, a European master painter with 52 years of experience. Serving North Port, Venice, Sarasota, and Tampa Bay with premium painting services.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Boris B. Painting
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            European craftsmanship meets Southwest Florida. 52 years of painting excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Boris B. Painting LLC was founded by <strong className="text-primary">Borislav Todorovich</strong>,
              a European master painter who has been perfecting his craft since 1974. With over 52 years
              of professional painting experience, Boris brings a level of precision and artistry
              that is simply unmatched in the industry.
            </p>
            <p>
              Originally trained in the European tradition of fine painting, Boris has dedicated
              his career to delivering flawless results on every project. His attention to detail,
              meticulous surface preparation, and commitment to using only the finest materials
              have earned him a perfect 5.0-star rating and the trust of homeowners throughout
              Southwest Florida.
            </p>
            <p>
              Based in North Port, Florida, Boris B. Painting specializes in exterior painting,
              offering an industry-leading 15-year written warranty on all exterior work. We
              exclusively use premium paints from Benjamin Moore and Sherwin-Williams because
              we believe your home deserves nothing less than the best.
            </p>
          </div>

          {/* Key Facts */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { number: "52+", label: "Years Experience" },
              { number: "5.0", label: "Star Rating" },
              { number: "15yr", label: "Warranty" },
              { number: "144", label: "Yelp Photos" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-gray-light p-6 text-center">
                <p className="text-3xl font-extrabold text-primary">{stat.number}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-gray-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "European Training",
                desc: "Trained in the European tradition of fine painting with meticulous attention to every detail.",
              },
              {
                title: "Premium Materials Only",
                desc: "We exclusively use Benjamin Moore and Sherwin-Williams paints for superior durability and finish.",
              },
              {
                title: "15-Year Written Warranty",
                desc: "Every exterior project comes with our industry-leading 15-year written warranty.",
              },
              {
                title: "Thorough Preparation",
                desc: "Proper surface preparation is the foundation of a lasting paint job. We never cut corners.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Areas We Serve
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["North Port", "Venice", "Sarasota", "Bradenton", "Englewood", "Port Charlotte", "St. Petersburg", "Tampa", "Punta Gorda", "Osprey"].map((area) => (
              <span key={area} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
