import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  defaultOpen?: number | null;
}

export function FaqAccordion({ items, defaultOpen = null }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-4">
      {items.map(({ q, a }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className={`border rounded-2xl overflow-hidden transition-all ${
            open === i ? "border-[#0D47A1]/30 shadow-md shadow-blue-50" : "border-[#E2EAF4] hover:border-[#0D47A1]/20"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
          >
            <span className={`font-semibold text-sm ${open === i ? "text-[#0D47A1]" : "text-[#0A1628]"}`}>{q}</span>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-[#0D47A1] text-white" : "bg-[#F8FAFF] text-[#5A7098]"}`}>
              {open === i ? <Minus size={13} /> : <Plus size={13} />}
            </span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.26 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-[#5A7098] text-sm leading-relaxed border-t border-[#E2EAF4] pt-4">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
