"use client";
import { motion } from "motion/react";
import { Clock, Headphones, ShieldCheck, Star, Cpu, Users } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Rapid Response Time",
    description: "Our SLA guarantees response within 1 hour for critical issues, ensuring minimal downtime for your business.",
    color: "#3B82F6",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description: "Every client gets a named account manager who understands your IT environment and business goals.",
    color: "#10B981",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Security",
    description: "We don't wait for breaches — we monitor, patch, and harden your systems around the clock.",
    color: "#F59E0B",
  },
  {
    icon: Star,
    title: "Proven Track Record",
    description: "98% client retention rate and over 1,200 successful projects across industries in Nepal.",
    color: "#EC4899",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "We stay current with the latest certifications and vendor partnerships to bring you the best solutions.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Local Team, Global Standards",
    description: "Our Nepali team is trained to international IT service management standards (ITIL, ISO 27001).",
    color: "#06B6D4",
  },
];

export function WhyUs() {
  return (
    <section className="py-28" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Split layout */}
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          {/* Left sticky */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-5"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93C5FD" }}
            >
              Why Choose Us
            </div>
            <h2
              className="text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.2 }}
            >
              The MSP Advantage
            </h2>
            <p className="leading-relaxed text-base mb-8" style={{ color: "#A8B4CC" }}>
              We're more than a vendor — we're a long-term technology partner invested in your success. Here's what sets us apart from the rest.
            </p>

            {/* Visual metric */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop&auto=format"
                alt="IT team working"
                className="w-full rounded-xl object-cover mb-5"
                style={{ height: "180px" }}
              />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "98%", label: "Client Retention" },
                  { value: "<1hr", label: "Avg Response" },
                  { value: "50+", label: "Certified Engineers" },
                  { value: "15+", label: "Tech Partners" },
                ].map((m) => (
                  <div key={m.label}>
                    <p
                      className="text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(135deg,#3B82F6,#10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-xs" style={{ color: "#6B7A99" }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${r.color}15`, border: `1px solid ${r.color}28` }}
                >
                  <r.icon size={20} style={{ color: r.color }} />
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.975rem", fontWeight: 700 }}
                >
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7A99" }}>{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
