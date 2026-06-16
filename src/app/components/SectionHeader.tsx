import { SectionLabel } from "./Shared";

interface Props {
  label: string;
  heading: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  desc,
  align = "center",
  dark = false,
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${alignClass} mb-14 ${className}`}>
      <SectionLabel text={label} dark={dark} />
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? "text-white" : "text-[#0A1628]"}`}
      >
        {heading}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""} ${dark ? "text-white/65" : "text-[#5A7098]"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
