import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight, Briefcase, CheckCircle, Code2, Clock, HeartHandshake, Users, Trophy, Shield, Zap, TrendingUp } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { StatCard } from "../components/StatCard";
import { TeamCard } from "../components/TeamCard";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { BlogCard } from "../components/BlogCard";
import { FaqAccordion } from "../components/FaqAccordion";
import { TechGrid } from "../components/TechGrid";
import { ClientMarquee } from "../components/ClientMarquee";
import { SectionLabel, Counter } from "../components/Shared";
import { Cloud, Globe } from "lucide-react";
import { CLIENT_NAMES } from "../data";
import { ProductsSection } from "../components/ProductsSection";

// ── DATA ──────────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    tag: "Welcome To MSP Solution",
    heading: "Driving digital success with innovative IT solutions.",
    sub: "With a focus on customization and scalability, we tailor our services to meet your unique needs.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
  {
    tag: "Welcome To MSP Solution",
    heading: "Achieve the best tech & digital experiences with IT solutions.",
    sub: "We develop effective plans to move your customers' behavior.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
  },
];

const STATS = [
  { value: "4+", label: "Years of Establishment", icon: Clock },
  { value: "275+", label: "Happy Clients", icon: HeartHandshake },
  { value: "22+", label: "Employees", icon: Users },
  { value: "30+", label: "Solutions", icon: Trophy },
];

const HOME_SERVICES = [
  { icon: Code2, title: "Software Development", desc: "MSP Solution develops reliable and aesthetically pleasing websites using the greatest coding practices and cutting-edge collaboration platforms.", link: "/services/software", gradient: "from-blue-600 to-blue-800" },
  { icon: Cloud, title: "Cloud Integration", desc: "A popular on-demand network access strategy gaining traction among businesses and organizations.", link: "/services/cloud", gradient: "from-orange-500 to-orange-700" },
  { icon: Globe, title: "Web Development", desc: "Custom website and web application development solutions.", link: "/services/web", gradient: "from-blue-700 to-indigo-800" },
];

const TECH_TABS = ["All", "Web Development", "App Development", "Backend", "Hosting"];
const TECHNOLOGIES = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", tabs: ["All", "Web Development"] },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", tabs: ["All", "Web Development"] },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", tabs: ["All", "Backend"] },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", tabs: ["All", "Backend"] },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", tabs: ["All", "Backend"] },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", tabs: ["All", "Backend"] },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", tabs: ["All", "Hosting"] },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", tabs: ["All", "Hosting", "Backend"] },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", tabs: ["All", "Hosting"] },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", tabs: ["All", "App Development"] },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", tabs: ["All", "Backend"] }
];

const TEAM = [
  { name: "Roshan Bhusal", role: "Founder / Chairman", img: "/team/roshan.jpg" },
  { name: "Susan Shrestha", role: "Co-Founder / CFO", img: "/team/susan.jpg" },
  { name: "Gyanendra Saud", role: "Executive Director / COO", img: "/team/gyanu.png" },
  { name: "Kshitij Bishokarma", role: "CTO / ShofyDrop Lead", img: "/team/Kshitiz.png" },
];


const TESTIMONIALS = [
  { name: "Bishnu Maharjan", role: "CEO / Devanasoft", review: "I can't express how transformative MSP's cloud services have been for our business. The seamless integration and scalable solutions have streamlined our operations and boosted our productivity. Their expert team was with us every step of the way, ensuring a smooth transition. We've seen remarkable improvements in efficiency and collaboration. Highly recommend!", stars: 5 },
  { name: "Subash Katel", role: "Fashion Nepal", review: "MSP Solution helped us elevate our online presence with their expertise in building our website. We are experiencing significant growth in our e-commerce platform. Their attention to detail and timely delivery exceeded our expectations. We highly recommend MSP for anyone looking to boost their online business.", stars: 5 },
  { name: "Govinda Bhusal", role: "Founder / Forward Khabar", review: "Thanks to MSP Solution, our online news portal is thriving. They built our website with expertise and dedication, paving the way for our success. We are grateful for MSP Solutions for their exceptional service and support.", stars: 5 },
  { name: "Dr. Suman Thapaliya", role: "Texas College of Management IT", review: "I am incredibly impressed with MSP Solution's AWS cloud services. Their cutting-edge technology, seamless integration, and excellent customer support made the whole experience exceptional. I highly recommend them to anyone looking for reliable cloud solutions.", stars: 5 },
  { name: "Dr. Pawan Kumar Sharma", role: "CEO / Envision Nepal", review: "I am beyond impressed with MSP Solution's top-notch IT services. Their team is highly knowledgeable and always provides quick and efficient solutions. My company's efficiency has improved significantly since partnering with them. I highly recommend MSP Solution for all your IT needs.", stars: 5 },
];

const FAQS = [
  { q: "Why should I choose your company?", a: "MSP Solution brings 4+ years of experience, 275+ satisfied clients, and a dedicated team of 22+ IT professionals committed to delivering exceptional results." },
  { q: "How do you ensure data security?", a: "We implement enterprise-grade security protocols, end-to-end encryption, regular security audits, and follow international standards." },
  { q: "Do you handle large-scale projects?", a: "Absolutely. Our team has delivered 30+ large-scale solutions for enterprises across Nepal and beyond." },
  { q: "What services do you offer?", a: "Software Development, Cloud Integration, Web Development, Digital Marketing, Networking Services, and Email Solutions." },
  { q: "How do I get started with your services?", a: "Email us at info@mspsolution.com.np. Our team responds within 24 hours to schedule a free consultation." },
];

const BLOGS = [
  { title: 'स्थानीय तहमा लोकप्रिय बन्दै "गुनासो" मोबाइल एप', date: "२०८१ असार २८", tag: "Innovation", img: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { title: "Cloud Migration: How Nepal Businesses Are Going Digital", date: "May 15, 2024", tag: "Cloud", img: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { title: "Modern Web Development Trends Transforming Businesses in 2024", date: "April 10, 2024", tag: "Web Dev", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
];

const WHY_US = [
  { icon: Shield, title: "Trusted & Secure", desc: "Enterprise-level security in every solution we build." },
  { icon: Zap, title: "Fast Delivery", desc: "Agile methodology ensures rapid, quality delivery." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business from day one." },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your success is our priority — always." },
];

// ── SECTIONS ──────────────────────────────────────────────────────────────────

function Hero() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCurrent((c) => (c + 1) % SLIDES.length); }, 5500);
    return () => clearInterval(t);
  }, []);
  const go = (n: number) => { setDir(n > current ? 1 : -1); setCurrent(n); };
  const slide = SLIDES[current];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }} className="absolute inset-0">
          <img src={slide.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 " />
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-24 right-16 w-72 h-72 rounded-full bg-[#FF6F00]/12 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 right-1/4 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen pt-24 pb-20">
        <AnimatePresence mode="wait">
          <motion.div key={current + "c"} initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -dir * 40 }} transition={{ duration: 0.55 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00] inline-block" />{slide.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{slide.heading}</h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">{slide.sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5">
                Explore More <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors backdrop-blur-sm">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2.5 bg-[#FF6F00]" : "w-2.5 h-2.5 bg-white/35 hover:bg-white/60"}`} />
        ))}
      </div>
      <button onClick={() => go((current - 1 + SLIDES.length) % SLIDES.length)} className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go((current + 1) % SLIDES.length)} className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronRight size={20} />
      </button>
    </section>
  );
}

function About() {
  return (
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
          <SectionLabel text="About Our Company" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-5">
            We Deal with the Aspects of <span className="text-[#0D47A1]">Professional IT Services</span>
          </h2>
          <p className="text-[#5A7098] mb-8 leading-relaxed">
            MSP Solution is a Nepal-based IT company providing expert IT services, website development, software development, cloud solutions, networking services, and digital transformation services. The company focuses on delivering functional digital products with strong business, design, and technology integration.
          </p>
          <div className="flex flex-col gap-3 mb-10">
            {["Expert IT services tailored to your business", "End-to-end digital transformation solutions", "Trusted by 275+ happy clients across Nepal"].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="text-[#FF6F00] mt-0.5 shrink-0" size={17} />
                <span className="text-[#0A1628] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>



          <Link to="/about" className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200">
            More Information <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
      {/* ── StatCard ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl gap-4 mb-8 pt-12 px-6">
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 bg-[#0D47A1] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF6F00]/12" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader label="Why Choose Us" heading={<>Built for Your <span className="text-[#FF6F00]">Business Success</span></>} dark />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white mb-4 flex items-center justify-center">
                <Icon className="text-[#FF6F00]" size={22} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="py-24 bg-[#0D47A1] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF6F00]/12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionLabel text="Explore Our Services" dark />
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Achieve the best tech & <span className="text-[#FF6F00]">digital experiences</span>
        </h2>
        <p className="text-white/65 text-lg mb-3 max-w-xl mx-auto">We can help you turn your ideas into reality if you have any.</p>
        <p className="text-white/45 text-base mb-10 max-w-xl mx-auto">With a focus on customization and scalability, we tailor our services to meet your unique needs.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6F00] hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5">
            Start Your Project <ArrowRight size={18} />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <About />

      {/* Services — uses ServiceCard */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Solutions" heading={<>MSP Provides You <span className="text-[#FF6F00]">Better Services</span></>} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {HOME_SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      <WhyUs />

      {/* Technology — uses TechGrid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Expertise" heading={<>Key Technologies <span className="text-[#0D47A1]">Empowering</span> Our Success</>} />
          <TechGrid tabs={TECH_TABS} technologies={TECHNOLOGIES} />
        </div>
      </section>

      {/* Team — uses TeamCard */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Team" heading={<>Meet Our <span className="text-[#0D47A1]">BOD & Executives</span></>} desc="Our expert team is the heart of our success, blending diverse skills and creativity while delivering innovative solutions." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {TEAM.map((m, i) => <TeamCard key={m.name} {...m} delay={i * 0.1} />)}
          </div>
        </div>
      </section>

      {/* Clients — uses ClientMarquee */}
      <section className="py-16 bg-white border-y border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Trusted By" heading={<>Few of Our <span className="text-[#FF6F00]">Valuable Clients</span></>} />
          <ClientMarquee clients={CLIENT_NAMES} speed={32} />
        </div>
      </section>

      {/* Testimonials — uses TestimonialSlider */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Testimonials" heading={<>What Our <span className="text-[#0D47A1]">Customers Are Saying</span></>} />
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ — uses FaqAccordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="FAQ" heading={<>Common <span className="text-[#0D47A1]">Frequently Asked</span> Questions</>} />
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* Blog — uses BlogCard */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Latest Insights" heading={<>Our Latest <span className="text-[#FF6F00]">Popular Blogs</span></>} />
          <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3">
              <BlogCard {...BLOGS[0]} variant="featured" tagColor="orange" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-5">
              {BLOGS.slice(1).map((b, i) => (
                <BlogCard key={b.title} {...b} variant="small" tagColor="blue" delay={(i + 1) * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
