"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICE_PAGES } from "../data";

export function ServiceSubNav() {
  const pathname = usePathname();
  return (
    <div className="bg-white border-b border-[#E2EAF4] sticky top-[65px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
      </div>
    </div>
  );
}

