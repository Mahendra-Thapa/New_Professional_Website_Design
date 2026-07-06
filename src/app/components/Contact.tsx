"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: "#1E2A3B",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    color: "#F0F4FF",
    padding: "12px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-28" style={{ background: "#0A0F1E" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4"
            style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#6EE7B7" }}
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Let's Start a Conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="max-w-lg mx-auto"
            style={{ color: "#6B7A99" }}
          >
            Ready to transform your IT infrastructure? Reach out for a free consultation — no obligations, just expert advice.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3
                className="text-white mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.3rem", fontWeight: 700 }}
              >
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Kathmandu, Bagmati Province, Nepal" },
                  { icon: Phone, label: "Phone", value: "+977 1-XXXXXXX / +977 98XXXXXXXX" },
                  { icon: Mail, label: "Email", value: "info@mspsolution.com.np" },
                  { icon: Clock, label: "Support Hours", value: "24/7 for Managed Clients\nSun–Fri 9AM–6PM for General Inquiries" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}
                    >
                      <Icon size={17} style={{ color: "#3B82F6" }} />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "#6B7A99" }}>{label}</p>
                      <p className="text-sm whitespace-pre-line" style={{ color: "#C7D2E8" }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?w=600&h=320&fit=crop&auto=format"
                  alt="Kathmandu Nepal map location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <CheckCircle size={52} style={{ color: "#10B981" }} className="mb-4" />
                  <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Message Sent!</h3>
                  <p style={{ color: "#6B7A99" }}>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: "rgba(59,130,246,0.15)", color: "#93C5FD", border: "1px solid rgba(59,130,246,0.2)" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-1.5" style={{ color: "#A8B4CC" }}>Full Name *</label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Shrestha"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1.5" style={{ color: "#A8B4CC" }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com.np"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-1.5" style={{ color: "#A8B4CC" }}>Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+977 98XXXXXXXX"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1.5" style={{ color: "#A8B4CC" }}>Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: "none" }}
                      >
                        <option value="" style={{ background: "#1E2A3B" }}>Select a service...</option>
                        {["IT Support & Maintenance", "Software Development", "Network Solutions", "Cybersecurity", "Cloud Services", "Web & Mobile Apps"].map((s) => (
                          <option key={s} value={s} style={{ background: "#1E2A3B" }}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5" style={{ color: "#A8B4CC" }}>Message *</label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your IT needs or challenges..."
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)", boxShadow: "0 0 24px rgba(59,130,246,0.25)" }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center" style={{ color: "#6B7A99" }}>
                    We respond within 24 hours on business days. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
