import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero, CTABanner } from "../components/Shared";
import { SERVICE_PAGES } from "../data";

const SERVICE_ICONS: Record<string, string> = {
  cloud: "Cloud", networking: "Server", software: "Code2",
  web: "Globe", "digital-marketing": "TrendingUp", ecommerce: "ShoppingBag",
};

export function Services() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" bg="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Solutions" heading={<>MSP Provides You <span className="text-[#FF6F00]">Better Services</span></>} desc="Comprehensive IT services designed to accelerate your business growth. Click any service to explore in detail." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICE_PAGES.map(({ slug, label, hero, subServices, gradient }, i) => {
              const iconName = SERVICE_ICONS[slug] ?? "Code2";
              const Icon = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName] ?? Icons.Code2;
              return (
                <motion.div key={slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <img src={hero.img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/70 via-[#0A1628]/20 to-transparent" />
                    <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={18} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0A1628] mb-2">{label}</h3>
                    <p className="text-[#5A7098] text-sm leading-relaxed mb-4">{hero.subtitle}</p>
                    <ul className="flex flex-col gap-1.5 mb-5">
                      {subServices.slice(0, 3).map(({ title }) => (
                        <li key={title} className="flex items-center gap-2 text-xs text-[#5A7098]">
                          <CheckCircle size={12} className="text-[#FF6F00] shrink-0" />{title}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${slug}`} className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore Service <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
