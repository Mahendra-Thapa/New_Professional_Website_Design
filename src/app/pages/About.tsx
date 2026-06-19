import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Briefcase, CheckCircle, Clock, HeartHandshake, Users, Trophy } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { StatCard } from "../components/StatCard";
import { PageHero, CTABanner } from "../components/Shared";
import { VMP } from "../data";

const STATS = [
  { value: "4+", label: "Years of Establishment", icon: Clock },
  { value: "275+", label: "Happy Clients", icon: HeartHandshake },
  { value: "22+", label: "Employees", icon: Users },
  { value: "30+", label: "Solutions Delivered", icon: Trophy },
];

export function About() {
  return (
    <>
      <PageHero title="About Our Company" crumb="About" bg="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" />

      {/* Main About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-100/80">
              <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80" alt="MSP Team" className="w-full h-[480px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0D47A1] rounded-2xl p-5 shadow-xl shadow-blue-300/30">
              <p className="text-white text-4xl font-bold">4+</p>
              <p className="text-blue-200 text-sm font-medium">Years Experience</p>
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl bg-[#FF6F00]/10 border border-[#FF6F00]/20 flex items-center justify-center">
              <Briefcase className="text-[#FF6F00]" size={28} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionHeader label="About Our Company" align="left" className="mb-6"
              heading={<>We Deal with the Aspects of <span className="text-[#0D47A1]">Professional IT Services</span></>} />
            <p className="text-[#5A7098] mb-4 leading-relaxed">
              MSP Solution is an IT company in Nepal focused on helping businesses grow through professional IT services. We provide website development, software development, networking, cloud solutions, and digital transformation services.
            </p>
            <p className="text-[#5A7098] mb-8 leading-relaxed">
              Our team combines business, design, and technology expertise to create high-quality digital products — delivering projects with maximum functionality through our distinctive MSP approach.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {["Young, enthusiastic team with deep domain expertise", "End-to-end digital transformation services", "Trusted by 275+ happy clients across Nepal", "We are delivering beautiful digital products"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-[#FF6F00] mt-0.5 shrink-0" size={17} />
                  <span className="text-[#0A1628] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
           
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200">
              Get In Touch <ArrowRight size={16} />
            </Link>
            
            
          </motion.div>
        </div>
         {/* ── StatCard ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl gap-4 mb-8 pt-12 px-6">
              {STATS.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
      </section>

      {/* Vision / Mission / Philosophy */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Core Values"
            heading={<>High-Quality & <span className="text-[#FF6F00]">Cost-Effective Services</span></>}
            desc="We provide high-quality and cost-effective services designed to help businesses digitally transform and achieve sustainable growth." />
          <div className="grid md:grid-cols-3 gap-6">
            {VMP.map(({ label, heading, body, bg, text, sub, iconBg, iconColor, icon: Icon }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className={`${bg} rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 border border-[#E2EAF4]`}>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={iconColor} size={26} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${sub} mb-2 block`}>{label}</span>
                <h3 className={`text-xl font-bold ${text} mb-4 leading-snug`}>{heading}</h3>
                <p className={`${sub} text-sm leading-relaxed`}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
