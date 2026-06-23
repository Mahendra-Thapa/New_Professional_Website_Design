import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PRODUCTS } from "../data";

export function ProductsSection() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-12  bg-white relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-1/4 left-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-[#0D47A1]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-[#FF6F00]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="Our Portfolio"
          heading={
            <>
              Innovative{" "}
              <span className="text-[#FF6F00]">Products & Solutions</span>
            </>
          }
          desc="Discover the software systems and digital platforms we've built to transform businesses and local governance."
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-14">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-100/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative h-40 sm:h-44 md:h-52 overflow-hidden bg-slate-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/25 to-transparent" />

                <span className="absolute top-3 sm:top-4 left-3 sm:left-4 inline-flex items-center gap-1.5 bg-white/95 text-[#0A1628] text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-sm">
                  {p.tag}
                </span>
              </div>

              {/* BODY */}
              <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] mb-2 sm:mb-3 group-hover:text-[#0D47A1] transition-colors">
                  {p.name}
                </h3>

                <p className="text-[#5A7098] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[#F3F7FD] text-[#0D47A1] text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between border-t border-[#E2EAF4] pt-3 sm:pt-4 mt-auto">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-xs sm:text-sm hover:gap-2.5 transition-all"
                  >
                    View Details
                  </Link>

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5A7098] hover:text-[#FF6F00] transition-colors p-1"
                      title={`Visit ${p.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Explore All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}