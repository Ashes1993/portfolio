"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ExternalLink,
  Database,
  Lock,
  Users,
  Server,
  Film,
  Newspaper,
  Home,
  User,
  Activity,
  Hand,
} from "lucide-react";
import Image from "next/image";

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [direction, setDirection] = useState(0);

  // Define tabs
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

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Helper to handle drag end (Mobile Swipe Logic)
  const handleDragEnd = (event, info) => {
    setHasInteracted(true);
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Swipe Left -> Go Next
    if (offset < -50 || velocity < -500) {
      const currentIndex = tabs.findIndex((t) => t.name === activeTab);
      if (currentIndex < tabs.length - 1) {
        setDirection(1); // Moving forward
        setActiveTab(tabs[currentIndex + 1].name);
      }
    }
    // Swipe Right -> Go Prev
    else if (offset > 50 || velocity > 500) {
      const currentIndex = tabs.findIndex((t) => t.name === activeTab);
      if (currentIndex > 0) {
        setDirection(-1); // Moving backward
        setActiveTab(tabs[currentIndex - 1].name);
      }
    }
  };

  return (
    <section
      id="work"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto"
    >
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
      <div className="glass-panel rounded-[2rem] px-4 py-8 md:p-12 relative overflow-hidden group">
        <div className="glow-blob bg-red-900/40 top-0 right-0 w-[500px] h-[500px] blur-[120px] -z-10 transition-opacity duration-700 group-hover:opacity-60" />

        {/* LAYOUT UPDATE: Stacked Flex (Vertical) */}
        <div className="flex flex-col gap-16 relative z-10">
          {/* 1. TEXT CONTENT (Top) */}
          <div className="max-w-3xl space-y-8">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-bold border border-red-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                LIVE PRODUCTION
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20">
                SOLO DEV
              </span>
            </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureItem
                icon={<Lock className="w-4 h-4 text-cyan-400" />}
                text="NextAuth"
              />
              <FeatureItem
                icon={<Database className="w-4 h-4 text-purple-400" />}
                text="PostgreSQL"
              />
              <FeatureItem
                icon={<Users className="w-4 h-4 text-red-400" />}
                text="Social Graph"
              />
              <FeatureItem
                icon={<Server className="w-4 h-4 text-yellow-400" />}
                text="VPS Deploy"
              />
            </div>

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

          {/* 2. THE VISUALS (Bottom) */}
          <div className="w-full flex justify-center perspective-1000">
            {/* --- MOBILE VIEW (Phone Mockup) --- */}
            <div className="md:hidden relative w-[100%] h-[85vh] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-20 flex justify-center items-center gap-2">
                <div className="w-10 h-1 rounded-full bg-gray-800/50"></div>
                <div className="w-1 h-1 rounded-full bg-blue-900/50"></div>
              </div>

              {/* Status Bar Mockup */}
              <div className="absolute top-2 right-5 z-20 text-[10px] text-white font-mono">
                5G
              </div>

              {/* DRAGGABLE SCREEN AREA */}
              <motion.div
                // FIX: Changed bg-gray-900 to bg-black and added touch-none to prevent browser native swipe highlighting
                className="w-full h-full cursor-grab active:cursor-grabbing bg-black touch-none"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence mode="popLayout" custom={isDragging}>
                  <motion.div
                    key={activeTab}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    // FIX: Added explicit bg-black to prevent any background bleed during the sliding animation
                    className="absolute inset-0 bg-black"
                  >
                    <Image
                      src={`/screenshots/mobile-${activeTab.toLowerCase()}.jpg`}
                      alt={`Grimsy Mobile ${activeTab} Screen`}
                      fill
                      className="object-cover object-top pointer-events-none select-none"
                      draggable={false}
                      sizes="(max-width: 768px) 100vw, 300px"
                      // FIX: Removed priority={true} to stop the preload mismatch warning
                    />
                  </motion.div>
                </AnimatePresence>

                {/* TUTORIAL HAND ANIMATION */}
                <AnimatePresence>
                  {!hasInteracted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                    >
                      <motion.div
                        animate={{ x: [0, 60, -60, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          repeatDelay: 1,
                        }}
                        className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/10"
                      >
                        <Hand className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="absolute bottom-20 text-xs font-bold text-white/70 bg-black/30 px-3 py-1 rounded-full backdrop-blur">
                        Swipe to Explore
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Bottom Bar Mockup */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20"></div>
            </div>

            {/* --- DESKTOP VIEW (Browser Mockup) --- */}
            <div className="hidden md:block w-full">
              <div
                className="
                relative w-full aspect-video rounded-xl bg-[#0f0f0f] border border-white/10 shadow-2xl overflow-hidden flex flex-col
                hover:shadow-purple-500/10 transition-shadow duration-500
              "
              >
                {/* Browser Header */}
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-4 select-none">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>

                  {/* Interactive URL Bar */}
                  <div className="flex-1 bg-black/40 rounded-md h-8 flex items-center px-3 gap-3">
                    <span className="text-red-500 font-bold text-xs tracking-wider mr-2">
                      GRIMSY
                    </span>
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`
                           flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium transition-colors
                           ${activeTab === tab.name ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"}
                         `}
                      >
                        {tab.icon}
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Browser Content */}
                <div className="relative flex-1 bg-black overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black "
                    >
                      <Image
                        src={`/screenshots/${activeTab.toLowerCase()}.png`}
                        alt={`Grimsy Desktop ${activeTab} Screen`}
                        fill
                        className="object-cover object-top"
                        // FIX: Added sizes prop and removed priority={true}
                        sizes="(min-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      {icon}
      <span className="text-sm font-medium text-gray-300">{text}</span>
    </div>
  );
}
