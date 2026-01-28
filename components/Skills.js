"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Cpu,
  Globe,
  Layout,
  Server,
  GitBranch,
  Figma,
} from "lucide-react";

export default function Skills() {
  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

      {/* SECTION HEADER */}
      <div className="mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        <p className="text-gray-400 max-w-2xl text-lg">
          I choose the right tool for the job. My stack is optimized for
          performance, scalability, and type-safety.
        </p>
      </div>

      {/* SKILLS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* COLUMN 1: FRONTEND (The Visuals) */}
        <SkillCard
          title="Frontend & UI"
          icon={<Layout className="w-6 h-6 text-cyan-400" />}
          description="Pixel-perfect, responsive interfaces with modern interactivity."
          glow="shadow-cyan-500/20"
        >
          <SkillItem name="Next.js 14" level="Expert" />
          <SkillItem name="React" level="Expert" />
          <SkillItem name="Tailwind CSS" level="Expert" />
          <SkillItem name="Framer Motion" level="Advanced" />
        </SkillCard>

        {/* COLUMN 2: BACKEND (The Logic) */}
        <SkillCard
          title="Backend & Data"
          icon={<Database className="w-6 h-6 text-purple-400" />}
          description="Robust server-side logic and database architecture."
          glow="shadow-purple-500/20"
        >
          <SkillItem name="PostgreSQL" level="Advanced" />
          <SkillItem name="Prisma ORM" level="Advanced" />
          <SkillItem name="NextAuth / Auth.js" level="Advanced" />
          <SkillItem name="Server Actions" level="Advanced" />
        </SkillCard>

        {/* COLUMN 3: TOOLS (The Infra) */}
        <SkillCard
          title="Infra & Tools"
          icon={<Terminal className="w-6 h-6 text-emerald-400" />}
          description="Production deployment and professional workflow tools."
          glow="shadow-emerald-500/20"
        >
          <SkillItem name="VPS / Linux" level="Intermediate" />
          <SkillItem name="Git / GitHub" level="Advanced" />
          <SkillItem name="Figma" level="Intermediate" />
          <SkillItem name="Vercel" level="Expert" />
        </SkillCard>
      </motion.div>
    </section>
  );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function SkillCard({ title, icon, description, children, glow }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className={`
        glass-panel p-8 rounded-2xl border border-white/5 relative group
        hover:border-white/20 transition-all duration-500
        hover:-translate-y-1 hover:${glow} hover:shadow-2xl
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {description}
      </p>

      {/* Skill Pills Grid */}
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

function SkillItem({ name, level }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5 group/item hover:border-white/10 transition-all">
      <div className="flex items-center gap-3">
        {/* Tiny Dot Indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 group-hover/item:animate-pulse" />
        <span className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
          {name}
        </span>
      </div>

      {/* Optional: You can hide this 'level' text if you prefer a cleaner look */}
      {/* <span className="text-xs text-gray-500 font-mono">{level}</span> */}
    </div>
  );
}
