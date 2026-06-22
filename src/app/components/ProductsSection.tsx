import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PRODUCTS } from "../data";

export function ProductsSection() {
  // Show first 3 products as featured on the Home page
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#0D47A1]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#FF6F00]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          label="Our Portfolio" 
          heading={<>Innovative <span className="text-[#FF6F00]">Products & Solutions</span></>} 
          desc="Discover the software systems and digital platforms we've built to transform businesses and local governance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-100/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image & tag */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/25 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 text-[#0A1628] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {p.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0D47A1] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[#5A7098] text-sm leading-relaxed mb-6 flex-grow">
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t) => (
                    <span 
                      key={t} 
                      className="bg-[#F3F7FD] text-[#0D47A1] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between border-t border-[#E2EAF4] pt-4 mt-auto">
                  <Link 
                    to={`/products`} 
                    className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-sm hover:gap-2.5 transition-all"
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

        {/* Explore all CTA */}
        <div className="text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
          >
            Explore All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
