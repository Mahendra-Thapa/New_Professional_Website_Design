import type { LucideIcon } from "lucide-react";
import { Counter } from "./Shared";

interface Props {
  value: string;
  label: string;
  icon: LucideIcon;
}

export function StatCard({ value, label, icon: Icon }: Props) {
  return (
    <div className="bg-[#F8FAFF] border border-[#E2EAF4] rounded-xl p-5 hover:border-[#0D47A1]/30 hover:shadow-md transition-all">
      <div className="w-9 h-9 rounded-lg bg-[#0D47A1]/10 flex items-center justify-center mb-2">
        <Icon className="text-[#0D47A1]" size={16} />
      </div>
      <Counter value={value} />
      <p className="text-[#5A7098] text-sm mt-1">{label}</p>
    </div>
  );
}
