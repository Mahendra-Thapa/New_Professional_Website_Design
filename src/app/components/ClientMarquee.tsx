interface Props {
  clients: string[];
  speed?: number;
}

export function ClientMarquee({ clients, speed = 30 }: Props) {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-8 items-center"
        style={{ animation: `marquee ${speed}s linear infinite`, width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 py-4 bg-white border border-[#E2EAF4] rounded-2xl hover:border-[#0D47A1]/30 hover:shadow-md hover:shadow-blue-100/40 transition-all cursor-pointer flex items-center justify-center h-20 w-40"
          >
            <img
              src={src}
              alt={`Client Logo ${i}`}
              className="max-h-full max-w-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
