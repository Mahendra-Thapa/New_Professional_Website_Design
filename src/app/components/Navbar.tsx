import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Users,
  Code2,
  BookOpen,
  Briefcase,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { NAV_LINKS, SERVICE_PAGES } from "../data";

const RESOURCE_LINKS = [
  {
    label: "Team",
    path: "/team",
    icon: Users,
    desc: "Meet our BOD & executives",
  },
  {
    label: "Technology",
    path: "/technology",
    icon: Code2,
    desc: "Our tech stack & expertise",
  },
  {
    label: "Career",
    path: "/career",
    icon: Briefcase,
    desc: "Join our growing team",
  },
  {
    label: "Blog",
    path: "/blog",
    icon: BookOpen,
    desc: "Latest news & insights",
  },
];

function Dropdown({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl shadow-blue-100/60 border border-[#E2EAF4] py-2 z-50 min-w-[260px]"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ServicesDropdown({ open }: { open: boolean }) {
  return (
    <Dropdown open={open}>
      <div className="px-4 pb-2 pt-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5A7098] mb-1">
          Our Services
        </p>
      </div>
      {SERVICE_PAGES.map(({ slug, label }) => (
        <Link
          key={slug}
          to={`/services/${slug}`}
          className="flex items-center gap-3 px-5 py-2.5 hover:bg-[#F8FAFF] transition-colors group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6F00]/60 group-hover:bg-[#FF6F00] transition-colors shrink-0" />
          <span className="text-sm font-medium text-[#0A1628] group-hover:text-[#0D47A1] transition-colors">
            {label}
          </span>
          <ArrowRight
            size={12}
            className="ml-auto text-[#5A7098]/40 group-hover:text-[#0D47A1] transition-colors"
          />
        </Link>
      ))}
      <div className="px-4 pt-2 pb-1 border-t border-[#E2EAF4] mt-1">
        <Link
          to="/services"
          className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#0D47A1] hover:text-[#FF6F00] transition-colors py-1.5"
        >
          View All Services <ArrowRight size={11} />
        </Link>
      </div>
    </Dropdown>
  );
}

function ResourcesDropdown({ open }: { open: boolean }) {
  return (
    <Dropdown open={open}>
      <div className="px-4 pb-2 pt-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5A7098] mb-1">
          Resources
        </p>
      </div>
      {RESOURCE_LINKS.map(({ label, path, icon: Icon, desc }) => (
        <Link
          key={path}
          to={path}
          className="flex items-start gap-3 px-4 py-3 hover:bg-[#F8FAFF] transition-colors group mx-1 rounded-xl"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0D47A1]/10 group-hover:bg-[#0D47A1] flex items-center justify-center shrink-0 transition-colors mt-0.5">
            <Icon
              size={15}
              className="text-[#0D47A1] group-hover:text-white transition-colors"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0A1628] group-hover:text-[#0D47A1] transition-colors leading-tight">
              {label}
            </p>
            <p className="text-xs text-[#5A7098] mt-0.5">{desc}</p>
          </div>
          <ArrowRight
            size={12}
            className="ml-auto text-[#5A7098]/40 group-hover:text-[#0D47A1] transition-colors mt-1.5 shrink-0"
          />
        </Link>
      ))}
    </Dropdown>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide top bar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [lastScrollY]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      )
        setServicesOpen(false);
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      )
        setResourcesOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const isServicesActive = pathname.startsWith("/services");
  const isResourcesActive = RESOURCE_LINKS.some(({ path }) =>
    pathname.startsWith(path),
  );

  return (
    <>
      {/* Top Info Bar */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r  text-gray-500 bg-gray-50 text-sm transition-all"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Subidhanagar, Kathmandu</span>
                </div>
                |
                <div className="hidden sm:flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:info@mspsolution.com.np"
                    className="hover:text-[#FF6F00] transition-colors"
                  >
                    info@mspsolution.com.np
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/mspsolutions2078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/msp-solution-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://www.instagram.com/mspsolutions2078/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <header
        className={`fixed ${showTopBar ? "top-10" : "top-0"} left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg shadow-blue-100/50 py-3" : "bg-white py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="MSP Logo"
              width={50}
              height={50}
              className=""
            />
            <p className="font-bold text-xl lg:text-2xl whitespace-nowrap text-[#2E2F70]">
              MSP Solution
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, path }) => {
              /* Services dropdown */
              if (label === "Services") {
                return (
                  <div key={path} className="relative" ref={servicesRef}>
                    <button
                      onClick={() => {
                        setServicesOpen(v => !v);
                        setResourcesOpen(false);
                      }}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors relative pb-0.5 ${isServicesActive ? "text-[#0D47A1]" : "text-[#5A7098] hover:text-[#0D47A1]"}`}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                      {isServicesActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6F00] rounded-full" />
                      )}
                    </button>
                    <ServicesDropdown open={servicesOpen} />
                  </div>
                );
              }

              /* Resources dropdown */
              if (label === "Resources") {
                return (
                  <div key={path} className="relative" ref={resourcesRef}>
                    <button
                      onClick={() => {
                        setResourcesOpen(v => !v);
                        setServicesOpen(false);
                      }}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors relative pb-0.5 ${isResourcesActive ? "text-[#0D47A1]" : "text-[#5A7098] hover:text-[#0D47A1]"}`}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                      />
                      {isResourcesActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6F00] rounded-full" />
                      )}
                    </button>
                    <ResourcesDropdown open={resourcesOpen} />
                  </div>
                );
              }

              /* Regular link */
              const active = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium transition-colors relative pb-0.5 ${active ? "text-[#0D47A1]" : "text-[#5A7098] hover:text-[#0D47A1]"}`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6F00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#0D47A1] hover:bg-[#1565C0] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Started <ArrowRight size={14} />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#0A1628]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#E2EAF4] px-6 pb-6 pt-4 flex flex-col gap-1 overflow-hidden"
            >
              {NAV_LINKS.map(({ label, path }) => {
                if (label === "Services") {
                  return (
                    <div key={path}>
                      <button
                        onClick={() => setMobileServicesOpen(v => !v)}
                        className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-[#5A7098]"
                      >
                        {label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-1 border-l-2 border-[#0D47A1]/20 ml-1 mb-1"
                          >
                            <Link
                              to="/services"
                              className="py-1.5 text-xs font-bold text-[#0D47A1]"
                            >
                              All Services
                            </Link>
                            {SERVICE_PAGES.map(({ slug, label: sLabel }) => (
                              <Link
                                key={slug}
                                to={`/services/${slug}`}
                                className="py-1.5 text-sm text-[#5A7098] hover:text-[#0D47A1]"
                              >
                                {sLabel}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (label === "Resources") {
                  return (
                    <div key={path}>
                      <button
                        onClick={() => setMobileResourcesOpen(v => !v)}
                        className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-[#5A7098]"
                      >
                        {label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileResourcesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 flex flex-col gap-1 border-l-2 border-[#FF6F00]/30 ml-1 mb-1"
                          >
                            {RESOURCE_LINKS.map(
                              ({ label: rLabel, path: rPath, icon: Icon }) => (
                                <Link
                                  key={rPath}
                                  to={rPath}
                                  className="py-2 text-sm text-[#5A7098] hover:text-[#0D47A1] flex items-center gap-2"
                                >
                                  <Icon size={14} className="text-[#FF6F00]" />
                                  {rLabel}
                                </Link>
                              ),
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={path}
                    to={path}
                    className={`py-2.5 text-sm font-medium ${pathname === path ? "text-[#0D47A1]" : "text-[#5A7098]"}`}
                  >
                    {label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="bg-[#0D47A1] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center mt-3"
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
