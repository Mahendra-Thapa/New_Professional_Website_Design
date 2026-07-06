"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Shrestha",
    role: "CEO, Himalayan Traders Pvt. Ltd.",
    avatar: "RS",
    avatarColor: "#3B82F6",
    rating: 5,
    text: "MSP Solution transformed our entire IT infrastructure. From migrating us to the cloud to setting up a robust security framework, their team was professional, knowledgeable, and always available. Our operational efficiency improved by 40% within the first quarter.",
  },
  {
    name: "Priya Maharjan",
    role: "IT Director, Kathmandu Finance Ltd.",
    avatar: "PM",
    avatarColor: "#10B981",
    rating: 5,
    text: "We've worked with MSP Solution for over 5 years. Their managed IT services have given us peace of mind — our systems are monitored 24/7, issues are resolved before they impact us, and their team genuinely understands our banking compliance requirements.",
  },
  {
    name: "Sanjay Acharya",
    role: "Managing Director, Yeti Hospitality Group",
    avatar: "SA",
    avatarColor: "#8B5CF6",
    rating: 5,
    text: "The custom hotel management software MSP Solution built for us has been a game changer. It integrated seamlessly with our existing systems and the team provided excellent training for our staff. Their post-launch support has been exceptional.",
  },
  {
    name: "Anita Gurung",
    role: "Operations Head, EduNepal Institute",
    avatar: "AG",
    avatarColor: "#F59E0B",
    rating: 5,
    text: "As an educational institution, data security and reliable internet connectivity are critical. MSP Solution delivered a comprehensive network solution and their ongoing support means our 2,000+ students and staff experience zero disruption.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="py-28" style={{ background: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93C5FD" }}
          >
            Client Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Trusted by Nepal's Best Businesses
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl p-10 overflow-hidden"
            style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 right-8 text-8xl leading-none select-none"
              style={{ color: "rgba(59,130,246,0.12)", fontFamily: "serif" }}
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" style={{ color: "#F59E0B" }} />
                  ))}
                </div>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "#C7D2E8", fontStyle: "italic" }}>
                  "{testimonials[active].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: testimonials[active].avatarColor, fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
                      {testimonials[active].name}
                    </p>
                    <p className="text-sm" style={{ color: "#6B7A99" }}>{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: i === active ? "#3B82F6" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#A8B4CC" }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#A8B4CC" }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Client logos strip */}
        <div className="mt-20">
          <p className="text-center text-sm mb-8" style={{ color: "#6B7A99" }}>Trusted by organizations across Nepal</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Himalayan Bank", "NIC Asia Bank", "Yeti Airlines", "Ncell", "Dabur Nepal", "CG Electronics", "Nepal SBI Bank", "Soaltee Hotel"].map((name) => (
              <div
                key={name}
                className="px-5 py-3 rounded-xl text-sm font-medium"
                style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)", color: "#6B7A99" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
