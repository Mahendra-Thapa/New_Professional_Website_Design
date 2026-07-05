import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  date?: string;
  tag: string;
  img: string;
  slug?: string;
  to?: string;
  variant?: "featured" | "medium" | "small";
  tagColor?: "orange" | "blue";
  delay?: number;
  excerpt?: string;
}

const heights: Record<NonNullable<Props["variant"]>, string> = {
  featured: "h-6",
  medium: "h-48",
  small: "h-36",
};

const titleSizes: Record<NonNullable<Props["variant"]>, string> = {
  featured: "text-xl",
  medium: "text-base",
  small: "text-sm",
};

export function BlogCard({
  title,
  date,
  tag,
  img,
  slug,
  to = "/blog",
  variant = "medium",
  tagColor = "orange",
  delay = 0,
  excerpt,
}: Props) {
  const tagBg = tagColor === "orange" ? "bg-[#FF6F00]" : "bg-[#0D47A1]";
  const padding = variant === "featured" ? "p-7" : "p-4";
  const linkTo = slug ? `/blog/${slug}` : to;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white border border-[#E2EAF4] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 transition-all cursor-pointer"
    >
      <div className={`relative ${heights[variant]} overflow-hidden`}>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-4 left-4 ${tagBg} text-white text-xs font-bold px-3 py-1 rounded-full`}
        >
          {tag}
        </span>
      </div>
      <div className={padding}>
        {date && <p className="text-[#5A7098] text-xs mb-1.5">{date}</p>}
        <h3
          className={`font-bold text-[#0A1628] leading-snug mb-2 ${titleSizes[variant]}`}
        >
          {title}
        </h3>
        {variant === "featured" && excerpt && (
          <p className="text-[#5A7098] text-sm mb-3 line-clamp-2">{excerpt}</p>
        )}
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1.5 text-[#0D47A1] font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
