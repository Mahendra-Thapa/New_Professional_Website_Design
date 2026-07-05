import { useState } from "react";

interface Props {
  clients: string[];
  speed?: number;
}

export function ClientMarquee({ clients, speed = 30 }: Props) {
  const [isPaused, setIsPaused] = useState(false);
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-8 items-center cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center h-16 w-36 px-2"
          >
            <img
              src={src}
              alt={`Client Logo ${i}`}
              className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
