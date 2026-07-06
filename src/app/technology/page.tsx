"use client";
import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { TechGrid } from "../components/TechGrid";
import { PageHero, CTABanner } from "../components/Shared";
import { TECH_TABS, TECHNOLOGIES } from "../data";

export default function Technology() {
  return (
    <>
      <PageHero title="Technology Stack" crumb="Technology" bg="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Technology Stack"
            heading={<>Key Technologies <span className="text-[#0D47A1]">Empowering</span> Our Success</>}
            desc="We work with industry-leading technologies to build robust, scalable, and modern digital solutions for our clients." />
          {/* ── TechGrid ── */}
          <TechGrid tabs={TECH_TABS} technologies={TECHNOLOGIES} />
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Approach" heading={<>Why We Choose <span className="text-[#FF6F00]">These Technologies</span></>} />
          <div className="grid md:grid-cols-3 gap-7">
            {[
              { title: "Performance First", desc: "Every technology we choose is benchmarked for speed, reliability, and production-grade performance at scale." },
              { title: "Modern & Maintained", desc: "We only work with actively maintained frameworks and libraries that have strong community support and long-term roadmaps." },
              { title: "Best for Your Business", desc: "We tailor the technology stack to your specific project needs — no one-size-fits-all approach." },
            ].map(({ title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E2EAF4] rounded-2xl p-7 hover:shadow-lg hover:shadow-blue-100/40 hover:border-[#0D47A1]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FF6F00]/10 border border-[#FF6F00]/20 flex items-center justify-center mb-4">
                  <span className="text-[#FF6F00] font-bold text-sm">{`0${i + 1}`}</span>
                </div>
                <h3 className="font-bold text-[#0A1628] text-lg mb-3">{title}</h3>
                <p className="text-[#5A7098] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
