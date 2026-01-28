"use client";
import { motion } from "framer-motion";
import { ArrowDown, Database, Layout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      {/* 1. BACKGROUND BLOBS */}
      <div className="glow-blob bg-purple-600 top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[500px] md:h-[500px]"></div>
      <div className="glow-blob bg-cyan-600 bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] animation-delay-2000"></div>

      {/* 2. MAIN CONTENT */}
      <div className="z-10 text-center max-w-4xl space-y-8 relative">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-cyan-300 mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Open to work
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Building <br className="md:hidden" />
          <span className="text-gradient">Complex Logic</span> <br />
          for the Web.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
        >
          I don't just build landing pages. I architect full-stack platforms
          with <span className="text-white font-medium">Next.js</span>,{" "}
          <span className="text-white font-medium">PostgreSQL</span>, and{" "}
          <span className="text-white font-medium">Tailwind</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            See The Project
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="glass-btn px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* 3. DECORATIVE FLOATING ICONS */}

      {/* Icon 1: Purple Database */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        /* FIX: Changed top-24 to top-32 for mobile clearance */
        className="absolute top-32 left-4 md:top-1/3 md:left-[10%] p-3 glass-panel rounded-xl z-0"
      >
        <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
      </motion.div>

      {/* Icon 2: Cyan Layout */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-4 md:top-auto md:bottom-1/3 md:right-[10%] p-3 glass-panel rounded-xl z-0"
      >
        <Layout className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
