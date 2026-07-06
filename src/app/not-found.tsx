import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#0D47A1]/10 mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#0A1628] mb-4">Page Not Found</h1>
        <p className="text-[#5A7098] mb-8 max-w-md mx-auto">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white font-bold px-7 py-3.5 rounded-xl transition-all">
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
