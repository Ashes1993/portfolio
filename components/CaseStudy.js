"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Database,
  Lock,
  Users,
  Server,
  Film,
  Newspaper,
  Home,
  User,
  Activity,
} from "lucide-react";

import Image from "next/image";

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("Home");

  // Define your tabs and their content (Placeholder colors for now)
  const tabs = [
    {
      name: "Home",
      color: "from-purple-900/50 to-black",
      icon: <Home size={14} />,
    },
    {
      name: "Media",
      color: "from-blue-900/50 to-black",
      icon: <Film size={14} />,
    },
    {
      name: "Feed",
      color: "from-red-900/50 to-black",
      icon: <Activity size={14} />,
    },
    {
      name: "Articles",
      color: "from-amber-900/50 to-black",
      icon: <Newspaper size={14} />,
    },
    {
      name: "Profile",
      color: "from-green-900/50 to-black",
      icon: <User size={14} />,
    },
  ];

  return (
    <section
      id="work"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

      {/* SECTION HEADLINE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-gradient">Case Study</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </motion.div>

      {/* MAIN GLASS CARD */}
      <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
        {/* Background Glow */}
        <div className="glow-blob bg-red-900/40 top-0 right-0 w-[500px] h-[500px] blur-[120px] -z-10 transition-opacity duration-700 group-hover:opacity-60" />

        <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
          {/* LEFT COLUMN: THE LOGIC */}
          <div className="flex-1 space-y-8 pt-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                LIVE PRODUCTION
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20">
                SOLO DEV
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Grimsy
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                The social network for horror fans. I noticed niche communities
                were fragmented, so I architected a dedicated hub featuring a
                custom
                <span className="text-white font-medium">
                  {" "}
                  Rating Algorithm
                </span>{" "}
                and
                <span className="text-white font-medium">
                  {" "}
                  Spoiler-Safe Reviews
                </span>
                .
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem
                icon={<Lock className="w-4 h-4 text-cyan-400" />}
                text="NextAuth & Middleware"
              />
              <FeatureItem
                icon={<Database className="w-4 h-4 text-purple-400" />}
                text="PostgreSQL & Prisma"
              />
              <FeatureItem
                icon={<Users className="w-4 h-4 text-red-400" />}
                text="Real-time Social Graph"
              />
              <FeatureItem
                icon={<Server className="w-4 h-4 text-yellow-400" />}
                text="VPS Deployment"
              />
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Next.js",
                "PostgreSQL",
                "Tailwind",
                "Framer Motion",
                "NextAuth",
                "Prisma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Button */}

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://grimsy.top"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Platform
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: THE INTERACTIVE BROWSER */}
          <div className="flex-1 w-full perspective-1000">
            <div
              className="
              relative w-full aspect-video rounded-xl bg-[#0f0f0f] border border-white/10 shadow-2xl overflow-hidden flex flex-col
              transition-transform duration-700 ease-out
            "
            >
              {/* 1. BROWSER HEADER (The Interactive Mini-Nav) */}
              <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-4 select-none">
                {/* Dots */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Grimsy URL Bar / Nav */}
                <div className="flex-1 bg-black/40 rounded-md h-8 flex items-center px-3 gap-3 overflow-x-auto scrollbar-hide">
                  <span className="text-red-500 font-bold text-xs tracking-wider mr-2">
                    GRIMSY
                  </span>

                  {/* Mini Tabs */}
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`
                         flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium transition-colors whitespace-nowrap
                         ${activeTab === tab.name ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"}
                       `}
                    >
                      {tab.icon}
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. THE SCREEN CONTENT (Animated Switcher) */}
              <div className="relative flex-1 bg-black overflow-hidden group-hover:cursor-pointer">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${tabs.find((t) => t.name === activeTab).color} flex items-center justify-center`}
                  >
                    <Image
                      src={`/screenshots/${activeTab.toLowerCase()}.png`}
                      alt={activeTab}
                      fill
                      className="object-cover object-top"
                    />

                    {/* <div className="text-center space-y-2">
                      <div className="text-6xl opacity-20 font-black">
                        {activeTab}
                      </div>
                      <div className="text-sm text-gray-400 font-mono border border-white/10 px-3 py-1 rounded-full bg-black/20 inline-block">
                        /screenshots/{activeTab.toLowerCase()}.png
                      </div>
                    </div> */}
                  </motion.div>
                </AnimatePresence>

                {/* Hover overlay to indicate clickable */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper for Feature List
function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      {icon}
      <span className="text-sm font-medium text-gray-300">{text}</span>
    </div>
  );
}
