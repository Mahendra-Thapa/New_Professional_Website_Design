"use client";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

interface Props {
  items: string[];
  dark?: boolean;
}

export function BenefitsList({ items, dark = false }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="flex items-start gap-3"
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${dark ? "bg-[#FF6F00]" : "bg-[#0D47A1]/10"}`}>
            <CheckCircle size={13} className={dark ? "text-white" : "text-[#0D47A1]"} />
          </div>
          <span className={`text-base ${dark ? "text-white/85" : "text-[#0A1628]"}`}>{item}</span>
        </motion.div>
      ))}
    </div>
  );
}
