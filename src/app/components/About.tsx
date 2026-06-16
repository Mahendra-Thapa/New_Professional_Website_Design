import { motion } from "motion/react";
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react";

const highlights = [
  "Founded in Kathmandu, Nepal with a vision to modernize local business IT",
  "Team of 50+ certified IT engineers and developers",
  "Serving SMEs, corporations, and government institutions",
  "Official partners with Microsoft, Cisco, and AWS",
  "Nationally recognized for excellence in IT service delivery",
];

const values = [
  { icon: Users, title: "Client-First", desc: "Every decision is driven by our clients' success and long-term growth." },
  { icon: Award, title: "Excellence", desc: "We hold the highest standards in quality, security, and reliability." },
  { icon: TrendingUp, title: "Innovation", desc: "We stay ahead of technology trends to deliver future-ready solutions." },
];

export function About() {
  return (
    <section id="about" className="py-28" style={{ background: "#0D1526" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=720&h=540&fit=crop&auto=format"
                alt="MSP Solution team collaborating"
                className="w-full object-cover"
                style={{ height: "420px" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 rounded-2xl p-5"
              style={{ background: "#111827", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>10+</p>
              <p className="text-sm" style={{ color: "#6B7A99" }}>Years in Nepal</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-5"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#6EE7B7" }}
            >
              About MSP Solution
            </div>

            <h2
              className="text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Nepal's Leading Managed IT Services Provider
            </h2>

            <p className="leading-relaxed mb-6 text-base" style={{ color: "#A8B4CC" }}>
              Since our founding, MSP Solution has been at the forefront of Nepal's digital transformation. We combine international IT expertise with a deep understanding of the local business landscape to deliver solutions that truly work.
            </p>
            <p className="leading-relaxed mb-8 text-base" style={{ color: "#A8B4CC" }}>
              Our certified team of engineers and developers partner with organizations across industries — banking, hospitality, education, retail, and government — to architect reliable, secure, and scalable technology ecosystems.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                  <span className="text-sm" style={{ color: "#A8B4CC" }}>{h}</span>
                </li>
              ))}
            </ul>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl p-4"
                  style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon size={18} className="mb-2" style={{ color: "#3B82F6" }} />
                  <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6B7A99" }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
