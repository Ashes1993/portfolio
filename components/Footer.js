"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  // REPLACE WITH YOUR ACTUAL EMAIL
  const email = "ashkaneslamii1993@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Background Gradient (The "Horizon" Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 1. THE HOOK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Ready to build <br />
            <span className="text-gradient">Something Real?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            I'm currently looking for full-time opportunities. If you need a
            developer who understands product architecture, not just code, let's
            talk.
          </p>
        </motion.div>

        {/* 2. THE MAGIC EMAIL BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center w-full"
        >
          <button
            onClick={handleCopy}
            // OPTIMIZATION: Changed px-8 to px-4 sm:px-8 to fit small mobile screens
            className="group relative flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 w-full max-w-md justify-center overflow-hidden"
          >
            {/* The Icon Switcher */}
            <div className="relative flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                  >
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-white transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* The Text Switcher */}
            {/* OPTIMIZATION: Scaled text for mobile and added truncate so long emails don't break layout */}
            <span className="text-sm sm:text-base md:text-xl font-mono text-gray-300 group-hover:text-white transition-colors truncate">
              {copied ? "Copied to Clipboard!" : email}
            </span>

            {/* Hover Tooltip (Desktop only) */}
            {/* OPTIMIZATION: Added hidden md:block to prevent tap-hover bugs on touch devices */}
            {!copied && (
              <span className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                Click to copy
              </span>
            )}
          </button>
        </motion.div>

        {/* 3. SOCIAL DOCK */}
        <div className="flex justify-center gap-6 mb-12">
          <SocialButton
            icon={<Github className="w-6 h-6" />}
            href="https://github.com/Ashes1993"
            label="GitHub"
          />
          <SocialButton
            icon={<Linkedin className="w-6 h-6" />}
            href="https://www.linkedin.com/in/ashkan-eslami-3982a7187"
            label="LinkedIn"
          />
        </div>

        {/* 4. COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Ashkan Eslami. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Buttons
function SocialButton({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 group relative flex-shrink-0"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
