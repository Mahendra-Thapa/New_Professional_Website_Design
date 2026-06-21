import { motion } from "motion/react";
import { MapPin, Mail, Phone, Globe, Facebook, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { SectionLabel, PageHero } from "../components/Shared";

export function Contact() {
  return (
    <>
      <PageHero title="Contact Us" crumb="Contact" bg="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionLabel text="Get In Touch" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628]">Ready to <span className="text-[#FF6F00]">Transform</span> Your Business?</h2>
            <p className="text-[#5A7098] mt-5 mb-10 leading-relaxed">
              Contact us today and let us discuss how MSP Solution can drive your digital transformation with expert IT services tailored for your needs.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: MapPin, label: "Address", val: "Subidhanagar, Tinkune, Kathmandu, Nepal" },
                { icon: Mail, label: "Email", val: "info@mspsolution.com.np" },
                { icon: Phone, label: "Nepal", val: "9867143463 / 9865837534 / 9861848861" },
                { icon: Phone, label: "USA", val: "+1 (214) 499-3889" },
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

            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-[#F8FAFF] border border-[#E2EAF4] hover:bg-[#0D47A1] hover:border-[#0D47A1] hover:text-white text-[#5A7098] flex items-center justify-center transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form className="bg-[#F8FAFF] border border-[#E2EAF4] rounded-2xl p-8 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-[#0A1628] mb-1">Send Us a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Full Name", "Email Address"].map((p) => (
                  <div key={p}>
                    <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">{p}</label>
                    <input type={p.includes("Email") ? "email" : "text"} placeholder={p}
                      className="w-full bg-white border border-[#E2EAF4] rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#5A7098]/55 focus:outline-none focus:border-[#0D47A1] transition-colors" />
                  </div>
                ))}
              </div>
              {["Phone Number", "Subject"].map((p) => (
                <div key={p}>
                  <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">{p}</label>
                  <input type="text" placeholder={p}
                    className="w-full bg-white border border-[#E2EAF4] rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#5A7098]/55 focus:outline-none focus:border-[#0D47A1] transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-[#5A7098] uppercase tracking-wide mb-1.5 block">Message</label>
                <textarea rows={5} placeholder="Tell us about your project..."
                  className="w-full bg-white border border-[#E2EAF4] rounded-xl px-4 py-3 text-sm text-[#0A1628] placeholder:text-[#5A7098]/55 focus:outline-none focus:border-[#0D47A1] transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2">
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-[#F8FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-sm h-[400px] bg-[#E8F0FE]">
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
    </>
  );
}
