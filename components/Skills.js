"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Terminal, Layout } from "lucide-react";

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

  return (
    <section
      id="skills"
      className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[120px] -z-10" />

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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {/* COLUMN 1: FRONTEND */}
        <SkillCard
          title="Frontend & UI"
          icon={<Layout className="w-6 h-6 text-cyan-400" />}
          description="Pixel-perfect, responsive interfaces with modern interactivity."
          glowClass="hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
        >
          <SkillItem name="Next.js 14" level="Expert" />
          <SkillItem name="React" level="Expert" />
          <SkillItem name="Tailwind CSS" level="Expert" />
          <SkillItem name="Framer Motion" level="Advanced" />
        </SkillCard>

        {/* COLUMN 2: BACKEND */}
        <SkillCard
          title="Backend & Data"
          icon={<Database className="w-6 h-6 text-purple-400" />}
          description="Robust server-side logic and database architecture."
          glowClass="hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >
          <SkillItem name="PostgreSQL" level="Advanced" />
          <SkillItem name="Prisma ORM" level="Advanced" />
          <SkillItem name="NextAuth / Auth.js" level="Advanced" />
          <SkillItem name="Server Actions" level="Advanced" />
        </SkillCard>

        {/* COLUMN 3: TOOLS */}
        <SkillCard
          title="Infra & Tools"
          icon={<Terminal className="w-6 h-6 text-emerald-400" />}
          description="Production deployment and professional workflow tools."
          glowClass="hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
          <SkillItem name="VPS / Linux" level="Intermediate" />
          <SkillItem name="Git / GitHub" level="Advanced" />
          <SkillItem name="Figma" level="Intermediate" />
          <SkillItem name="Vercel" level="Expert" />
        </SkillCard>
      </motion.div>

      {/* TERMINAL DEMO SECTION */}
      <TerminalDemo />
    </section>
  );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function SkillCard({ title, icon, description, children, glowClass }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      className={`
        glass-panel p-8 rounded-2xl border border-white/5 relative group
        transition-all duration-500 hover:-translate-y-1 hover:z-10
        hover:border-white/20 hover:bg-white/5 ${glowClass}
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

function SkillItem({ name }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5 group/item hover:border-white/10 transition-all">
      <div className="flex items-center gap-3">
        {/* Tiny Dot Indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 group-hover/item:animate-pulse" />
        <span className="text-sm font-medium text-gray-200 group-hover/item:text-white transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// TERMINAL DEMO COMPONENT
// ----------------------------------------------------------------------

function TerminalDemo() {
  const [cmd1, setCmd1] = useState("");
  const [cmd2, setCmd2] = useState("");
  const [step, setStep] = useState(0);
  // 0: idle, 1: typing cmd1, 2: output reading, 3: typing cmd2, 4: clear & reset

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let timeout;

    // Helper to type the first command
    const typeCmd1 = () => {
      const text = "sudo systemctl status nginx";
      let i = 0;
      setCmd1("");
      const interval = setInterval(() => {
        setCmd1(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setStep(2), 300); // brief pause before output
        }
      }, 50);
    };

    // Helper to type the second command
    const typeCmd2 = () => {
      const text = "clear";
      let i = 0;
      setCmd2("");
      const interval = setInterval(() => {
        setCmd2(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setStep(4), 400); // hit enter on clear
        }
      }, 50);
    };

    // State Machine
    if (step === 0) {
      setCmd1("");
      setCmd2("");
      timeout = setTimeout(() => setStep(1), 1000); // wait before starting loop
    } else if (step === 1) {
      typeCmd1();
    } else if (step === 2) {
      // Show output, wait 4 seconds for user to read it
      timeout = setTimeout(() => setStep(3), 4000);
    } else if (step === 3) {
      typeCmd2();
    } else if (step === 4) {
      // Execute clear (wipe screen instantly and restart)
      setStep(0);
    }

    return () => clearTimeout(timeout);
  }, [step, isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a]"
    >
      {/* Terminal Header */}
      <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs font-mono text-gray-500">
          user@production-server:~
        </div>
        <div className="w-10"></div> {/* Spacer for centering text */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[350px] overflow-x-auto flex flex-col">
        {/* FIRST COMMAND LINE */}
        {step > 0 && (
          <div className="flex items-center whitespace-nowrap">
            <span className="text-green-400 mr-2">user@production-server</span>
            <span className="text-blue-400 mr-2">~ #</span>
            <span>{cmd1}</span>
            {/* Blinking cursor only shows here if we are on step 1 */}
            {step === 1 && (
              <span className="w-2 h-5 bg-white/70 animate-pulse ml-1 inline-block align-middle" />
            )}
          </div>
        )}

        {/* NGINX OUTPUT BLOCK */}
        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 mb-2 text-gray-400 leading-relaxed whitespace-pre"
          >
            <div className="text-white font-bold">
              ● nginx.service - A high performance web server and a reverse
              proxy server
            </div>
            <div>
              {" "}
              Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor
              preset: enabled)
            </div>
            <div>
              {" "}
              Active:{" "}
              <span className="text-green-400 font-bold">
                active (running)
              </span>{" "}
              since Sun 2026-02-15 14:41:31 GMT; 2 weeks ago
            </div>
            <div> Docs: man:nginx(8)</div>
            <div> Main PID: 14032 (nginx)</div>
            <div> Tasks: 3 (limit: 4613)</div>
            <div> Memory: 5.2M</div>
            <div> CGroup: /system.slice/nginx.service</div>
            <div>
              {" "}
              ├─14032 nginx: master process /usr/sbin/nginx -g daemon on;
              master_process on;
            </div>
            <div> ├─14033 nginx: worker process</div>
            <div> └─14034 nginx: worker process</div>
          </motion.div>
        )}

        {/* SECOND COMMAND LINE (Appears after output) */}
        {step >= 2 && (
          <div className="flex items-center whitespace-nowrap">
            <span className="text-green-400 mr-2">user@production-server</span>
            <span className="text-blue-400 mr-2">~ #</span>
            <span>{cmd2}</span>
            {/* Blinking cursor moves here for steps 2 and 3 */}
            {(step === 2 || step === 3) && (
              <span className="w-2 h-5 bg-white/70 animate-pulse ml-1 inline-block align-middle" />
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
