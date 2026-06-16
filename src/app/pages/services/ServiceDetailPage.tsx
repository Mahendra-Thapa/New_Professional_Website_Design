import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { BenefitsList } from "../../components/BenefitsList";
import { ProcessSteps } from "../../components/ProcessSteps";
import { FaqAccordion } from "../../components/FaqAccordion";
import { PageHero, CTABanner, SectionLabel } from "../../components/Shared";
import { FAQS } from "../../data";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

type SubService = { title: string; icon: string; points: string[] };
type ServiceData = {
  slug: string;
  label: string;
  hero: { title: string; subtitle: string; img: string };
  overview: string;
  subServices: SubService[];
  benefits: string[];
  benefitsHeading: string;
  process: string[];
  gradient: string;
};

function getIcon(name: string) {
  const I = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  return I ?? Icons.Code2;
}

export function ServiceDetailPage({ service }: { service: ServiceData }) {
  return (
    <>
      <PageHero title={service.hero.title} crumb={service.label} bg={service.hero.img} />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeader label="Overview" align="left" className="mb-6"
              heading={<>{service.hero.title} <span className="text-[#0D47A1]">by MSP Solution</span></>} />
            <p className="text-[#5A7098] text-base leading-relaxed mb-8">{service.overview}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/60 h-80">
            <img src={service.hero.img} alt={service.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Sub-Services — card grid with reusable ChevronRight list */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="What We Offer" heading={<>Services <span className="text-[#FF6F00]">Included</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map(({ title, icon, points }, i) => {
              const Icon = getIcon(icon);
              return (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group bg-white border border-[#E2EAF4] rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-base mb-3">{title}</h3>
                  <ul className="flex flex-col gap-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[#5A7098]">
                        <ChevronRight size={14} className="text-[#FF6F00] shrink-0 mt-0.5" />{p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Process — uses BenefitsList & ProcessSteps */}
      <section className="py-20 bg-[#0D47A1] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#FF6F00]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel text="Benefits" dark />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{service.benefitsHeading}</h2>
            {/* ── BenefitsList ── */}
            <BenefitsList items={service.benefits} dark />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Our Process</h3>
            {/* ── ProcessSteps ── */}
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      {/* FAQ — uses FaqAccordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader label="FAQ" heading={<>Common <span className="text-[#0D47A1]">Questions</span></>} />
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
