"use client";
import { motion } from "motion/react";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #0D1526 50%, #0A1628 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", color: "#93C5FD" }}
            >
              <Zap size={14} />
              Nepal's Trusted IT Solutions Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Powering Your Business with{" "}
              <span style={{ background: "linear-gradient(90deg,#3B82F6,#10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Smart Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "#A8B4CC" }}
            >
              MSP Solution delivers end-to-end IT services — from managed support and cybersecurity to custom software development and cloud infrastructure — helping Nepali businesses scale with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)", boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
              >
                Explore Services <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10"
                style={{ color: "#F0F4FF", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Talk to an Expert
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              {[
                { icon: Shield, text: "ISO Certified" },
                { icon: Zap, text: "24/7 Support" },
                { icon: Globe, text: "Pan-Nepal Coverage" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2" style={{ color: "#6B7A99" }}>
                  <Icon size={15} style={{ color: "#3B82F6" }} />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=560&fit=crop&auto=format"
                  alt="IT infrastructure and server room"
                  className="w-full object-cover"
                  style={{ height: "380px" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,15,30,0.8) 0%, transparent 60%)" }}
                />
                {/* Overlay stat */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="rounded-xl px-5 py-4 flex items-center justify-between"
                    style={{ background: "rgba(17,24,39,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div>
                      <p className="text-white font-bold text-xl" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>500+</p>
                      <p className="text-xs" style={{ color: "#6B7A99" }}>Clients Served Across Nepal</p>
                    </div>
                    <div className="h-8 w-px mx-4" style={{ background: "rgba(255,255,255,0.08)" }} />
                    <div>
                      <p className="text-white font-bold text-xl" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>99.9%</p>
                      <p className="text-xs" style={{ color: "#6B7A99" }}>System Uptime SLA</p>
                    </div>
                    <div className="h-8 w-px mx-4" style={{ background: "rgba(255,255,255,0.08)" }} />
                    <div>
                      <p className="text-white font-bold text-xl" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>10+</p>
                      <p className="text-xs" style={{ color: "#6B7A99" }}>Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 rounded-xl px-4 py-3"
                style={{ background: "#111827", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-white">System Healthy</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "#6B7A99" }}>All services operational</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1,200+", label: "Projects Delivered" },
            { value: "10+", label: "Years Experience" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4"
              style={{ background: "#0A0F1E" }}
            >
              <span
                className="text-white mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em", background: "linear-gradient(135deg,#3B82F6,#10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-center" style={{ color: "#6B7A99" }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
