import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  if (dark) {
    return (
      <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
        {text}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
      {text}
    </span>
  );
}

export function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let s = 0;
      const step = Math.max(1, Math.ceil(num / 45));
      const t = setInterval(() => {
        s = Math.min(s + step, num);
        setDisplay(s + suffix);
        if (s >= num) clearInterval(t);
      }, 35);
      obs.disconnect();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, suffix]);
  return <div ref={ref} className="text-4xl font-bold text-[#0D47A1]">{display}</div>;
}

export function PageHero({ title, crumb, bg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80" }: { title: string; crumb: string; bg?: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/92 via-[#0D47A1]/80 to-[#0D47A1]/60" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF6F00]/10 blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-white/60 hover:text-[#FF6F00] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-[#FF6F00] font-semibold">{crumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="py-24 bg-[#0D47A1] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF6F00]/12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/5" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionLabel text="Explore Our Services" dark />
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Achieve the Best Tech & <span className="text-[#FF6F00]">Digital Experiences</span>
        </h2>
        <p className="text-white/62 text-lg mb-10 max-w-xl mx-auto">
          We can help you turn your ideas into reality — customization and scalability focus built for your unique business needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5">
            Start Your Project <ChevronRight size={18} />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
