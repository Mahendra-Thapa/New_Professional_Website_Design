import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero, CTABanner, SectionLabel } from "../components/Shared";

// ── DATA ──────────────────────────────────────────────────────────────────────

const EXECUTIVES = [
  { name: "Roshan Bhusal",    role: "Founder / Chairman",       img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Susan Shrestha",   role: "Co-Founder / CFO",         img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Gyanendra Saud",   role: "Executive Director / COO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { name: "Kshitij Bishokarma", role: "CTO / ShofyDrop Lead",  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
];

const DEPARTMENTS: { label: string; bg: "white" | "soft"; members: { name: string; role: string; img: string }[] }[] = [
  {
    label: "Cloud Team", bg: "white",
    members: [
      { name: "Gaurav Khatiwada", role: "DevOps Engineer",  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Arbin Sapkota",    role: "Cloud Engineer",   img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
    ],
  },
  {
    label: "Frontend Team", bg: "soft",
    members: [
      { name: "Mahendra Thapa",   role: "Frontend Lead",        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Nishant Adhikari", role: "Associate Developer",  img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Sangam Magar",     role: "Associate Developer",  img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
    ],
  },
  {
    label: "Backend Team", bg: "white",
    members: [
      { name: "Ram Kumar Gautam", role: "Java Developer",           img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Deepak Rana",      role: "Java Developer",           img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Bhimsen Basnet",   role: "Java Associate Developer", img: "https://images.unsplash.com/photo-1595152772835-219674b2a163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
    ],
  },
  {
    label: "UI/UX & Flutter Team", bg: "soft",
    members: [
      { name: "Rakesh Shrestha", role: "UI/UX Designer",    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Aawhan Karki",    role: "Flutter Developer", img: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
    ],
  },
  {
    label: "Legal & Audit Team", bg: "white",
    members: [
      { name: "Ramesh Kunwar",  role: "Legal Advisor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
      { name: "Padam Bhattarai", role: "Auditor",      img: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
    ],
  },
];

// ── SINGLE CARD (used everywhere) ─────────────────────────────────────────────

function MemberCard({ name, role, img, delay = 0 }: { name: string; role: string; img: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden flex flex-col
                 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Square photo — full width, fixed height */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D47A1]/80 via-[#0D47A1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Social icons on photo hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {[Linkedin, Facebook, Instagram].map((Icon, j) => (
            <button
              key={j}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0D47A1] shadow-lg hover:bg-[#FF6F00] hover:text-white transition-all duration-200"
            >
              <Icon size={15} />
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 flex flex-col items-center w-full">
        {/* Name */}
        <h3 className="font-bold text-[#0A1628] text-base leading-snug">{name}</h3>
        {/* Position */}
        <p className="text-[#FF6F00] text-xs font-semibold mt-1.5">{role}</p>
      </div>
    </motion.div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export function Team() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        crumb="Team"
        bg="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
      />

      {/* Stats strip */}
      <section className="bg-white border-b border-[#E2EAF4] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "14+", label: "Team Members" },
            { value: "6",   label: "Departments" },
            { value: "4+",  label: "Years Together" },
            { value: "30+", label: "Projects Delivered" },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl font-bold text-[#0D47A1]">{value}</span>
              <span className="text-[#5A7098] text-sm mt-1 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Executive Leadership"
            heading={<>Meet Our <span className="text-[#0D47A1]">BOD & Executives</span></>}
            desc="Our expert team is the heart of our success, blending diverse skills and creativity — dedicated to delivering innovative solutions and turning ideas into reality."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {EXECUTIVES.map((m, i) => (
              <MemberCard key={m.name} {...m} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Department sections */}
      {DEPARTMENTS.map(({ label, bg, members }) => (
        <section key={label} className={bg === "white" ? "py-20 bg-white" : "py-20 bg-[#F8FAFF]"}>
          <div className="max-w-7xl mx-auto px-6">

            {/* Department heading — same pattern as every other section */}
            <div className="text-center mb-12">
              <SectionLabel text={label} />
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]">
                Our <span className="text-[#0D47A1]">{label}</span>
              </h2>
              <p className="text-[#5A7098] text-sm mt-2">
                {members.length} {members.length === 1 ? "Member" : "Members"}
              </p>
            </div>

            {/* Cards — centred regardless of count */}
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((m, i) => (
                <div
                  key={m.name}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-xs"
                >
                  <MemberCard {...m} delay={i * 0.1} />
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* Culture */}
      <section className="py-20 bg-[#0D47A1] relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF6F00]/12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            label="Our Culture"
            dark
            heading={<>What Drives Our <span className="text-[#FF6F00]">Team Forward</span></>}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Collaboration First", desc: "Engineering, design, and strategy working as one — aligned to deliver the best outcomes for every client." },
              { num: "02", title: "Continuous Learning", desc: "Investing in certifications, workshops, and hands-on experimentation to stay ahead of industry trends." },
              { num: "03", title: "Client Obsession", desc: "Every decision filtered through one question: does this create more value for our clients?" },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-white/10 border border-white/15 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors">
                <span className="text-5xl font-bold text-white/10 block mb-4">{num}</span>
                <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
