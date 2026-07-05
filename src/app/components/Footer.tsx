import { Link } from "react-router";
import { MapPin, Mail, Phone, Globe, Facebook, Linkedin, Instagram, Youtube, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-[#050B14] text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">

          {/* Brand & About */}
          <div className="lg:col-span-4 lg:pr-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl  shadow-lg shadow-blue-900/20 border border-blue-600/30 flex items-center justify-center p-1.5">
                <img src="/logo.png" alt="MSP Solution" className="w-full h-full object-contain rounded-sm" />
              </div>
              <span className="text-xl font-bold tracking-wide">MSP Solution</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Expert IT services helping businesses prosper and expand. Driving digital success with innovative solutions from Kathmandu, Nepal.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/mspsolutions2078", hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/msp-solution-pvt-ltd/posts/?feedView=all", hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white" },
                { Icon: Instagram, href: "https://www.instagram.com/mspsolutions2078/", hoverClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white" },
                { Icon: Youtube, href: "https://www.youtube.com", hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white" },
              ].map(({ Icon, href, hoverClass }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hoverClass || 'hover:text-white'}`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#FF6F00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3">
              {[["Home", "/"], ["About", "/about"], ["Products", "/products"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(([l, p]) => (
                <li key={l}>
                  <Link to={p} className="group text-white/60 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#FF6F00]/0 group-hover:text-[#FF6F00] transition-colors -ml-4 group-hover:ml-0 duration-300" />
                    <span className="transform transition-transform duration-300">{l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#FF6F00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3">
              {[["Team", "/team"], ["Technology", "/technology"], ["Career", "/career"], ["Blog", "/blog"]].map(([l, p]) => (
                <li key={l}>
                  <Link to={p} className="group text-white/60 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#FF6F00]/0 group-hover:text-[#FF6F00] transition-colors -ml-4 group-hover:ml-0 duration-300" />
                    <span className="transform transition-transform duration-300">{l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider mb-6 relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#FF6F00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-3">
              {["Cloud Services", "Digital Marketing", "Ecommerce Development", "Email Services", "Networking Services", "Software Development"].map((l) => (
                <li key={l}>
                  <Link to="/services" className="group text-white/60 hover:text-[#FF6F00] text-sm transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#FF6F00]/0 group-hover:text-[#FF6F00] transition-colors -ml-4 group-hover:ml-0 duration-300" />
                    <span className="transform transition-transform duration-300">{l}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2 sm:col-span-2 lg:col-span-2">
            <h4 className="font-semibold text-white tracking-wider mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#FF6F00] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: MapPin, val: "Subidhanagar, Tinkune, Kathmandu" },
                { icon: Mail, val: "info@mspsolution.com.np" },
                { icon: Phone, val: "9867143463 / 9865837534" },
                { icon: Globe, val: "www.mspsolution.com.np" },
              ].map(({ icon: Icon, val }) => (
                <li key={val} className="flex items-start gap-3 group">
                  <div className="mt-0.5 p-1.5 rounded-md bg-white/5 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={14} />
                  </div>
                  <span className="text-white/60 text-sm mt-1">{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-6 bg-black/20">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} MSP Solution Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
