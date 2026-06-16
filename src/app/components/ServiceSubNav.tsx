import { Link, useLocation } from "react-router";
import { SERVICE_PAGES } from "../data";

export function ServiceSubNav() {
  const { pathname } = useLocation();
  return (
    <div className="bg-white border-b border-[#E2EAF4] sticky top-[65px] z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
      </div>
    </div>
  );
}
