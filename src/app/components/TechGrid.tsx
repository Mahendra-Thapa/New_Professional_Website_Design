"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Technology {
  name: string;
  icon?: string;
  tabs: string[];
}

interface Props {
  tabs: string[];
  technologies: Technology[];
}

export function TechGrid({ tabs, technologies }: Props) {
  const [active, setActive] = useState(tabs[0]);
  const filtered = technologies.filter((t) => t.tabs.includes(active));

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              active === tab
                ? "bg-[#0D47A1] text-white shadow-md shadow-blue-200"
                : "bg-[#F8FAFF] border border-[#E2EAF4] text-[#5A7098] hover:border-[#0D47A1]/30 hover:text-[#0D47A1]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tech Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filtered.map(({ name, icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, delay: i * 0.04 }}
            className="group flex flex-col items-center gap-2.5 bg-[#F8FAFF] border border-[#E2EAF4] rounded-xl p-5 hover:border-[#0D47A1]/40 hover:bg-white hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-11 h-11 flex items-center justify-center">
              {icon ? (
                <img
                  src={icon}
                  alt={name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <span className="text-2xl font-black text-[#0D47A1]">{name[0]}</span>
              )}
            </div>
            <span className="text-[#0A1628] text-xs font-bold text-center leading-tight">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
