"use client";
import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

interface Props {
  name: string;
  role: string;
  img: string;
  showSocials?: boolean;
  delay?: number;
}

export function TeamCard({ name, role, img, showSocials = false, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 transition-all"
    >
      <div className="relative overflow-hidden h-64">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {showSocials && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            {[Linkedin, Facebook, Instagram].map((Icon, j) => (
              <button key={j} className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[#0D47A1] transition-colors">
                <Icon size={14} />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#0A1628] text-base">{name}</h3>
        <p className="text-[#FF6F00] text-sm font-semibold mt-0.5">{role}</p>
        <div className="w-8 h-0.5 bg-[#0D47A1]/20 mt-3 group-hover:w-16 group-hover:bg-[#FF6F00] transition-all duration-300" />
      </div>
    </motion.div>
  );
}
