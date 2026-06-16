import { motion } from "motion/react";
import { Monitor, Code, Network, Shield, Cloud, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Support & Maintenance",
    description: "Round-the-clock managed IT support, helpdesk services, hardware maintenance, and proactive system monitoring to keep your operations running smoothly.",
    color: "#3B82F6",
    features: ["24/7 Helpdesk", "Remote & On-site Support", "Hardware Repair", "Preventive Maintenance"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom enterprise software, ERP systems, and business automation solutions built with modern technologies tailored to your specific needs.",
    color: "#10B981",
    features: ["Custom ERP/CRM", "Business Automation", "API Integration", "Legacy Modernization"],
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "End-to-end network design, installation, and management — LAN/WAN, structured cabling, VPN setup, and ongoing network optimization.",
    color: "#8B5CF6",
    features: ["LAN/WAN Setup", "Structured Cabling", "VPN Configuration", "Network Monitoring"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security assessments, threat detection, endpoint protection, and compliance consulting to safeguard your digital assets.",
    color: "#F59E0B",
    features: ["Security Audits", "Firewall Management", "Endpoint Protection", "Compliance (ISO/GDPR)"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, infrastructure management, and optimization on AWS, Azure, and Google Cloud platforms to maximize performance and reduce costs.",
    color: "#06B6D4",
    features: ["Cloud Migration", "AWS / Azure / GCP", "Cost Optimization", "Disaster Recovery"],
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "High-performance web applications and mobile apps for iOS and Android that deliver exceptional user experiences and drive business growth.",
    color: "#EC4899",
    features: ["React / Next.js", "iOS & Android", "UI/UX Design", "E-commerce"],
  },
];

export function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-28" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#93C5FD" }}
          >
            What We Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Comprehensive IT Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "#6B7A99" }}
          >
            From day-to-day IT management to complex digital transformations — we have the expertise to handle it all.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl p-7 cursor-default transition-all duration-300"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
              >
                <svc.icon size={22} style={{ color: svc.color }} />
              </div>

              <h3
                className="text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.1rem", fontWeight: 700 }}
              >
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7A99" }}>
                {svc.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#A8B4CC" }}>
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: svc.color }}
              >
                Learn more <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
