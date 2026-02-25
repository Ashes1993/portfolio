"use client";

import { motion } from "framer-motion";
import GrimsyProject from "./GrimsyProject";
import ArchiveDiscoveryProject from "./ArchiveDiscoveryProject";

// ======================================================================
// 1. MAIN PARENT COMPONENT
// ======================================================================
export default function CaseStudy() {
  return (
    <section
      id="work"
      // Added flex-col and gap-32 to stack multiple projects with clean breathing room
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-32"
    >
      {/* SECTION HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-gradient">Case Studies</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </motion.div>

      {/* PROJECT 1: GRIMSY */}
      <GrimsyProject />

      {/* PROJECT 2: ARCHIVE DISCOVERY (Will go here) */}
      <ArchiveDiscoveryProject />
    </section>
  );
}

// ======================================================================
// 3. UTILITY COMPONENTS
// ======================================================================
export function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      {icon}
      <span className="text-sm font-medium text-gray-300">{text}</span>
    </div>
  );
}
