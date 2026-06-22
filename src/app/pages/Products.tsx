import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageHero, CTABanner } from "../components/Shared";
import { SectionHeader } from "../components/SectionHeader";
import { PRODUCTS } from "../data";
import { ExternalLink } from "lucide-react";

export function Products() {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "WEB", "MOBILE"];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "ALL") return true;
    return p.tag.toUpperCase().includes(activeTab);
  });

  return (
    <>
      <PageHero 
        title="Our Products & Projects" 
        crumb="Products" 
        bg="https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" 
      />

      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            label="Our Latest Works" 
            heading={<>Beautiful & High-Performing <span className="text-[#FF6F00]">Digital Systems</span></>} 
            desc="Explore our portfolio of standard products, custom software systems, e-commerce, and digital services built for business scalability and citizen engagement."
          />

          {/* Filter Tabs */}
          <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#0D47A1] text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-[#5A7098] hover:bg-[#F3F7FD] hover:text-[#0D47A1] border border-[#E2EAF4]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/95 text-[#0A1628] text-xs font-bold px-3.5 py-1 rounded-full shadow-sm">
                      {p.tag}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0D47A1] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[#5A7098] text-sm leading-relaxed mb-6 flex-grow">
                      {p.desc}
                    </p>

                    {/* Tech list */}
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

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between border-t border-[#E2EAF4] pt-4 mt-auto">
                      <span className="text-xs font-medium text-[#5A7098]">
                        Developed by MSP Solution
                      </span>
                      {p.link && (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1.5 text-[#0D47A1] hover:text-[#FF6F00] font-bold text-xs transition-colors"
                        >
                          Live Link <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-[#E2EAF4] mt-8">
              <p className="text-[#5A7098]">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
