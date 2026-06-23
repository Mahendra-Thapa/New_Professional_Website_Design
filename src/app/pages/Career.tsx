import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Globe, Upload, ArrowRight, Briefcase, Users, Zap, Heart } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero, CTABanner } from "../components/Shared";

const OPEN_ROLES = [
  { title: "Flutter Developer", type: "Full-time", location: "Subidhanagar, Kathmandu", exp: "1–2 years" },
  { title: "Software Developer", type: "Full-time", location: "Subidhanagar, Kathmandu", exp: "2+ years" },
  { title: "DevOps Engineer", type: "Full-time", location: "Subidhanagar, Kathmandu", exp: "2+ years" },
  { title: "UI/UX Designer", type: "Full-time", location: "Subidhanagar, Kathmandu", exp: "1+ years" },
  { title: "Cloud Engineer", type: "Full-time", location: "Subidhanagar, Kathmandu", exp: "2+ years" },
];

const PERKS = [
  { icon: Briefcase, title: "Growth Opportunities", desc: "Clear career paths and mentorship from industry experts." },
  { icon: Users, title: "Collaborative Culture", desc: "Work alongside passionate engineers and designers every day." },
  { icon: Zap, title: "Cutting-edge Stack", desc: "Build with the latest technologies in cloud, mobile, and web." },
  { icon: Heart, title: "Work-Life Balance", desc: "Flexible hours and a supportive, people-first environment." },
];

export function Career() {
  const [fileName, setFileName] = useState("");

  return (
    <>
      <PageHero
        title="Career"
        crumb="Career"
        bg="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
      />

      {/* Hero intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeader
            label="Join Our Team"
            heading={<>If you have any comments, <span className="text-[#FF6F00]">please apply now</span></>}
            desc="We're always looking for talented, passionate people to join the MSP Solution family. Browse open roles or send us your CV directly."
          />
        </div>
      </section>

      {/* Perks */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#F8FAFF] border border-[#E2EAF4] rounded-2xl p-6 hover:border-[#0D47A1]/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#0D47A1]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#0D47A1]" size={20} />
                </div>
                <h3 className="font-bold text-[#0A1628] text-base mb-2">{title}</h3>
                <p className="text-[#5A7098] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Open Positions"
            heading={<>Current <span className="text-[#0D47A1]">Job Openings</span></>}
            desc="We're hiring across engineering, design, and cloud. Find your role below."
          />
          <div className="flex flex-col gap-4">
            {OPEN_ROLES.map(({ title, type, location, exp }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-[#E2EAF4] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0D47A1]/30 hover:shadow-md transition-all">
                <div>
                  <h3 className="font-bold text-[#0A1628] text-base group-hover:text-[#0D47A1] transition-colors">{title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="text-xs font-semibold text-[#FF6F00] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">{type}</span>
                    <span className="flex items-center gap-1 text-xs text-[#5A7098]"><MapPin size={11} />{location}</span>
                    <span className="text-xs text-[#5A7098]">Exp: {exp}</span>
                  </div>
                </div>
                <a href="#apply"
                  className="shrink-0 inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-md">
                  Apply Now <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form + Contact */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeader label="Apply Now" align="left" className="mb-8"
              heading={<>Send Your <span className="text-[#FF6F00]">Application</span></>} />
            <form className="bg-[#F8FAFF] border border-[#E2EAF4] rounded-2xl p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {["Your Name", "Your Email"].map((p) => (
                  <div key={p}>
                    <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">{p}</label>
                    <input type={p.includes("Email") ? "email" : "text"} placeholder={p}
                      className="w-full bg-white border border-[#E2EAF4] rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#5A7098]/55 focus:outline-none focus:border-[#0D47A1] transition-colors" />
                  </div>
                ))}
              </div>
              {["Your Phone", "Your Project", "Subject"].map((p) => (
                <div key={p}>
                  <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">{p}</label>
                  <input type="text" placeholder={p}
                    className="w-full bg-white border border-[#E2EAF4] rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#5A7098]/55 focus:outline-none focus:border-[#0D47A1] transition-colors" />
                </div>
              ))}

              {/* CV Upload */}
              <div>
                <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">Upload CV</label>
                <label className="flex flex-col items-center justify-center gap-3 w-full bg-white border-2 border-dashed border-[#E2EAF4] rounded-xl py-6 cursor-pointer hover:border-[#0D47A1]/40 hover:bg-[#F8FAFF] transition-all">
                  <Upload className="text-[#0D47A1]" size={24} />
                  <span className="text-sm text-[#5A7098]">
                    {fileName ? <span className="text-[#0D47A1] font-semibold">{fileName}</span> : "Click to upload your CV (PDF, DOC)"}
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
                </label>
              </div>

              <button type="submit" className="w-full bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2">
                Submit Application <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeader label="Contact HR" align="left" className="mb-8"
              heading={<>Reach Out <span className="text-[#0D47A1]">Directly</span></>} />
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: MapPin, label: "Address", val: "Subidhanagar, Tinkune, Kathmandu, Nepal" },
                { icon: Mail, label: "Email", val: "info@mspsolution.com.np" },
                { icon: Phone, label: "Nepal", val: "9867143463 / 9865837534" },
                { icon: Globe, label: "Website", val: "www.mspsolution.com.np" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label + val} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0D47A1]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#0D47A1]" size={17} />
                  </div>
                  <div>
                    <p className="text-[#5A7098] text-xs font-semibold uppercase tracking-wide">{label}</p>
                    <p className="text-[#0A1628] font-medium text-sm mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <section className="bg-[#F8FAFF] py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-sm h-[250px] bg-[#E8F0FE]">
                  <iframe
                    title="MSP Solution Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2113708307297!2d85.3428371!3d27.6832794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195daf226305%3A0x3ab09dd0441b9068!2sMSP%20Solution%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1718960000000!5m2!1sen!2snp"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
