interface Props {
  clients: string[];
  speed?: number;
}

export function ClientMarquee({ clients, speed = 30 }: Props) {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-5"
        style={{ animation: `marquee ${speed}s linear infinite`, width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-7 py-4 bg-[#F8FAFF] border border-[#E2EAF4] rounded-xl hover:border-[#0D47A1]/30 hover:bg-[#E8F0FE]/40 transition-all cursor-pointer"
          >
            <span className="text-[#5A7098] font-bold text-sm whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
