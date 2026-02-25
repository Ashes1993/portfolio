"use client";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-20 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About <span className="text-gradient">The Builder</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: THE NARRATIVE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I didn't take the traditional path. With over a decade of
              professional experience in research, data mining, and client
              support, I bring a unique, logic-driven perspective to
              engineering. For the past{" "}
              <span className="text-white font-semibold">three years</span>,
              I've been obsessively self-educating in frontend and full-stack
              development, moving past "tutorial hell" to build real, complex
              software.
            </p>
            <p>
              My philosophy is simple:{" "}
              <span className="text-white font-semibold">
                Shipping is the only metric that matters.
              </span>
            </p>
            <p>
              While others were building To-Do apps, I was architecting{" "}
              <span className="text-purple-400">Grimsy</span>—a full-scale
              social platform with authentication, relational databases, and
              real-time interactions. I believe in understanding the entire
              stack, from the database schema to the CSS animation.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            {/* Abstract "Quote" or Tagline */}
            <div className="border-l-4 border-cyan-500 pl-6 italic text-gray-400">
              "I don't just write code; I solve business problems with logic."
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE "SYSTEM SPECS" CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* FIX: Removed the brutal `blur-3xl` background element.
            Replaced it with a clean, GPU-safe box-shadow directly on the panel.
          */}

          {/* The Glass Terminal */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden bg-black/40 shadow-[0_0_80px_-20px_rgba(168,85,247,0.15)]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-gray-500">
                user_profile.json
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatItem
                icon={<Globe className="w-5 h-5 text-purple-400" />}
                label="Location"
                value="Global / Remote"
              />
              <StatItem
                icon={<Code className="w-5 h-5 text-cyan-400" />}
                label="Experience"
                value="3+ Years Deep Dive"
              />
              <StatItem
                icon={<Cpu className="w-5 h-5 text-emerald-400" />}
                label="Focus"
                value="Full Stack Architecture"
              />
              <StatItem
                icon={<Zap className="w-5 h-5 text-yellow-400" />}
                label="Current Status"
                value="Ready to Ship"
              />
            </div>

            {/* "Code" Decorator at bottom */}
            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-xs text-gray-500">
              <span className="text-purple-400">const</span> developer ={" "}
              <span className="text-yellow-300">new</span>{" "}
              <span className="text-cyan-300">Builder</span>(); <br />
              developer.<span className="text-blue-300">init</span>();
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper for the Stats
function StatItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
      <div className="mt-1 p-2 bg-white/5 rounded-md border border-white/5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
          {label}
        </div>
        <div className="text-white font-medium">{value}</div>
      </div>
    </div>
  );
}
