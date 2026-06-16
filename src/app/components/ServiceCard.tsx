import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
  gradient: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, desc, link, gradient, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white border border-[#E2EAF4] rounded-2xl p-7 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={22} />
      </div>
      <h3 className="text-lg font-bold text-[#0A1628] mb-3">{title}</h3>
      <p className="text-[#5A7098] text-sm leading-relaxed mb-5">{desc}</p>
      <Link to={link} className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-sm group-hover:gap-3 transition-all">
        View More <ChevronRight size={14} />
      </Link>
    </motion.div>
  );
}
