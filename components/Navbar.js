"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Work", href: "work" },
    { name: "Skills", href: "skills" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" }, // Added Contact to list for mobile map
  ];

  // 1. Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) =>
        document.getElementById(link.href),
      );
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    // 2. Click Outside Logic
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false); // Close menu on mobile
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div ref={navRef} className="relative">
        {/* CONTAINER: The Expanding Glass Pill */}
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className={`
            relative z-50 rounded-[2rem] border border-white/10 flex flex-col overflow-hidden
            ${scrolled || mobileMenuOpen ? "bg-black/60 backdrop-blur-2xl shadow-2xl" : "bg-black/20 backdrop-blur-xl shadow-lg"}
            ${mobileMenuOpen ? "w-[300px]" : "w-auto"}
          `}
        >
          {/* HEADER ROW (Logo + Button) */}
          <div
            className={`
            flex items-center justify-between px-6 py-3
            ${mobileMenuOpen ? "w-full" : "gap-8 min-w-[300px] md:min-w-[500px]"}
          `}
          >
            {/* Logo */}
            <span
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
              className="font-bold text-xl tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              DEV.
            </span>

            {/* DESKTOP LINKS (Hidden on Mobile) */}
            {!mobileMenuOpen && (
              <div className="hidden md:flex gap-2 text-sm font-medium text-gray-400">
                {navLinks.slice(0, 3).map((link) => {
                  // Exclude Contact from middle links
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.name}
                      href={`#${link.href}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`
                        relative px-4 py-2 rounded-full transition-all duration-300 group
                        ${
                          isActive
                            ? "text-white"
                            : "hover:text-purple-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white/10 border border-white/5 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-all duration-300 ${!isActive && "group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"}`}
                      >
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}

            {/* DESKTOP CTA BUTTON */}
            {!mobileMenuOpen && (
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className="hidden md:block relative group overflow-hidden bg-white text-black px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform active:scale-95 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Let's Talk
                </span>
              </button>
            )}

            {/* MOBILE HAMBURGER / CLOSE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE MENU CONTENT (Expands Downwards) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden border-t border-white/5"
              >
                <div className="flex flex-col p-4 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={`#${link.href}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`
                        text-center py-3 rounded-xl text-sm font-medium transition-all
                        ${
                          activeSection === link.href
                            ? "bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}
