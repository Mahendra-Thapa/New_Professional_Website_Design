import { Link } from "react-router";
import { MapPin, Mail, Phone, Globe, Facebook, Linkedin, Instagram, Youtube, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[#0D47A1] border border-blue-700 flex items-center justify-center">
                <img src="/logo.png" alt="MSP Solution" width={50} height={50} />
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Expert IT services helping businesses prosper and expand. Driving digital success with innovative solutions from Kathmandu, Nepal.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/6 hover:bg-[#0D47A1] border border-white/10 hover:border-[#0D47A1] flex items-center justify-center text-white/45 hover:text-white transition-all">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[["Home", "/"], ["About", "/about"], ["Products", "/products"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(([l, p]) => (
                <li key={l}>
                  <Link to={p} className="text-white/45 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-1.5">
                    <ChevronRight size={11} className="text-[#FF6F00]/50" />{l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {[["Team", "/team"], ["Technology", "/technology"], ["Career", "/career"], ["Blog", "/blog"]].map(([l, p]) => (
                <li key={l}>
                  <Link to={p} className="text-white/45 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-1.5">
                    <ChevronRight size={11} className="text-[#FF6F00]/50" />{l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="flex flex-col gap-3">
              {["Cloud Services", "Digital Marketing", "Ecommerce Development", "Email Services", "Networking Services", "Software Development"].map((l) => (
                <li key={l}>
                  <Link to="/services" className="text-white/45 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-1.5">
                    <ChevronRight size={11} className="text-[#FF6F00]/50" />{l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: MapPin, val: "Subidhanagar, Tinkune, Kathmandu" },
                { icon: Mail, val: "info@mspsolution.com.np" },
                { icon: Phone, val: "9867143463 / 9865837534" },
                { icon: Globe, val: "www.mspsolution.com.np" },
              ].map(({ icon: Icon, val }) => (
                <li key={val} className="flex items-start gap-3">
                  <Icon className="text-[#FF6F00] shrink-0 mt-0.5" size={13} />
                  <span className="text-white/45 text-sm">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/6 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/28 text-xs">© {new Date().getFullYear()} MSP Solution Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="text-white/28 hover:text-[#FF6F00] text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
