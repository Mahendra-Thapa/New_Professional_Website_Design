import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  review: string;
  stars: number;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: Props) {
  const [idx, setIdx] = useState(0);
  const n = testimonials.length;
  const prev = () => setIdx((i) => (i - 1 + n) % n);
  const next = () => setIdx((i) => (i + 1) % n);
  const visible = [
    testimonials[(idx - 1 + n) % n],
    testimonials[idx],
    testimonials[(idx + 1) % n],
  ];

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {visible.map((t, i) => {
          const center = i === 1;
          return (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-7 transition-all ${
                center
                  ? "bg-[#0D47A1] shadow-2xl shadow-blue-300/30 scale-105 z-10 relative"
                  : "bg-white border border-[#E2EAF4] opacity-75"
              }`}
            >
              <Quote className={`mb-4 ${center ? "text-[#FF6F00]" : "text-[#0D47A1]/25"}`} size={28} />
              <p className={`text-sm leading-relaxed mb-6 ${center ? "text-white/85" : "text-[#5A7098]"}`}>
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${center ? "bg-[#FF6F00] text-white" : "bg-[#E8F0FE] text-[#0D47A1]"}`}>
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className={`font-bold text-sm truncate ${center ? "text-white" : "text-[#0A1628]"}`}>{t.name}</p>
                  <p className={`text-xs truncate ${center ? "text-blue-200" : "text-[#5A7098]"}`}>{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={11} className={center ? "text-[#FF6F00] fill-[#FF6F00]" : "text-yellow-400 fill-yellow-400"} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button onClick={prev} className="w-11 h-11 rounded-full border border-[#E2EAF4] bg-white hover:bg-[#0D47A1] hover:border-[#0D47A1] hover:text-white text-[#0A1628] flex items-center justify-center transition-all">
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2.5 bg-[#FF6F00]" : "w-2.5 h-2.5 bg-[#E2EAF4]"}`} />
          ))}
        </div>
        <button onClick={next} className="w-11 h-11 rounded-full border border-[#E2EAF4] bg-white hover:bg-[#0D47A1] hover:border-[#0D47A1] hover:text-white text-[#0A1628] flex items-center justify-center transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
