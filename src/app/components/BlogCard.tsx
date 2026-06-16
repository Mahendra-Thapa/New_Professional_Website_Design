import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  date: string;
  tag: string;
  img: string;
  to?: string;
  variant?: "featured" | "medium" | "small";
  tagColor?: "orange" | "blue";
  delay?: number;
}

const heights: Record<NonNullable<Props["variant"]>, string> = {
  featured: "h-64",
  medium: "h-48",
  small: "h-36",
};

const titleSizes: Record<NonNullable<Props["variant"]>, string> = {
  featured: "text-xl",
  medium: "text-base",
  small: "text-sm",
};

export function BlogCard({ title, date, tag, img, to = "/blog", variant = "medium", tagColor = "orange", delay = 0 }: Props) {
  const tagBg = tagColor === "orange" ? "bg-[#FF6F00]" : "bg-[#0D47A1]";
  const padding = variant === "featured" ? "p-7" : "p-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 transition-all cursor-pointer"
    >
      <div className={`relative ${heights[variant]} overflow-hidden`}>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className={`absolute top-4 left-4 ${tagBg} text-white text-xs font-bold px-3 py-1 rounded-full`}>{tag}</span>
      </div>
      <div className={padding}>
        <p className="text-[#5A7098] text-xs mb-1.5">{date}</p>
        <h3 className={`font-bold text-[#0A1628] leading-snug mb-3 ${titleSizes[variant]}`}>{title}</h3>
        <Link to={to} className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-sm group-hover:gap-3 transition-all">
          Read More <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
