"use client";
import { motion } from "motion/react";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { PageHero, CTABanner, SectionLabel } from "../components/Shared";

// ── DATA ──────────────────────────────────────────────────────────────────────

const EXECUTIVES = [
  { name: "Roshan Bhusal", role: "Founder / Chairman", img: "/team/roshan.jpg" },
  { name: "Susan Shrestha", role: "Co-Founder / CFO", img: "/team/susan.jpg" },
  { name: "Gyanendra Saud", role: "Executive Director / COO", img: "/team/gyanu.png" },
  { name: "Kshitij Bishokarma", role: "CTO / ShofyDrop Lead", img: "/team/Kshitiz.png" },
];

const DEPARTMENTS: { label: string; bg: "white" | "soft"; members: { name: string; role: string; img: string }[] }[] = [
  {
    label: "Cloud Team", bg: "white",
    members: [
      { name: "Gaurav Khatiwada", role: "DevOps Engineer", img: "/team/Gaurav.png" },
      { name: "Arbin Sapkota", role: "Cloud Engineer", img: "/team/Arbin.png" },
    ],
  },
  {
    label: "Frontend Team", bg: "soft",
    members: [
      { name: "Mahendra Thapa", role: "Frontend Lead", img: "/team/Mahendra.png" },
      { name: "Nishant Adhikari", role: "Associate Developer", img: "/team/nishant.png" },
      { name: "Sangam Magar", role: "Associate Developer", img: "/team/sangam.jpg" },
    ],
  },
  {
    label: "Backend Team", bg: "white",
    members: [
      { name: "Ram Kumar Gautam", role: "Java Developer", img: "/team/Ram.png" },
      { name: "Deepak Rana", role: "Java Developer", img: "/team/deepak.jpg" },
      { name: "Bhimsen Basnet", role: "Java Associate Developer", img: "/team/bhim.png" },
    ],
  },
  {
    label: "UI/UX & Flutter Team", bg: "soft",
    members: [
      { name: "Rakesh Shrestha", role: "UI/UX Designer", img: "/team/rakesh.png" },
      { name: "Aawhan Karki", role: "Flutter Developer", img: "/team/hjur.png" },
    ],
  },
  {
    label: "Legal & Audit Team", bg: "white",
    members: [
      { name: "Ramesh Kunwar", role: "Legal Advisor", img: "/team/Ramesh.jpg" },
      { name: "Padam Bhattarai", role: "Auditor", img: "/team/padam.png" },
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
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={img}
          alt={name}
          className="
          w-full h-full 
          object-cover
          group-hover:scale-110
          transition duration-700
          "
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

export default function Team() {
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
            { value: "6", label: "Departments" },
            { value: "4+", label: "Years Together" },
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
      <section className="py-20 bg-[#F8FAFF] relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF6F00]/12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <SectionHeader
            label="Our Culture"
            dark
            labelClassName="!text-[#0D47A1] !bg-[#0D47A1]/10 !border-[#0D47A1]/20"
            heading={
              <>
                <span className="text-gray-900">
                  What Drives Our{" "}
                </span>
                <span className="text-[#FF6F00]">
                  Team Forward
                </span>
              </>
            }
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                num: "01",
                title: "Collaboration First",
                desc: "Engineering, design, and strategy working together as one team to create meaningful solutions and exceptional client experiences.",
              },
              {
                num: "02",
                title: "Continuous Learning",
                desc: "We grow through experimentation, innovation, certifications, and knowledge sharing to stay ahead of technology trends.",
              },
              {
                num: "03",
                title: "Client Obsession",
                desc: "Every decision starts with one goal — creating measurable value and long-term success for our clients.",
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                className="
            group relative
            bg-white
            border border-gray-100
            rounded-3xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
          "
              >

                {/* Number */}
                <div
                  className="
              w-16 h-16
              rounded-2xl
              bg-[#FF6F00]/10
              flex items-center justify-center
              mb-6
              group-hover:bg-[#FF6F00]
              transition-all duration-300
            "
                >
                  <span
                    className="
                text-2xl font-bold 
                text-[#FF6F00]
                group-hover:text-white
                transition
              "
                  >
                    {num}
                  </span>
                </div>


                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {desc}
                </p>


                {/* Bottom Accent */}
                <div
                  className="
              absolute bottom-0 left-8 right-8
              h-1
              rounded-full
              bg-[#FF6F00]
              scale-x-0
              group-hover:scale-x-100
              transition-transform duration-300
              origin-left
            "
                />

              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
