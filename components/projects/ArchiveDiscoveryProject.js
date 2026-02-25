"use client";
import { useState, useRef, useEffect } from "react";
import { Database, Server, Film, Activity, ExternalLink } from "lucide-react";

import Image from "next/image";
import FeatureItem from "../ui/FeatureItem";
import VideoPlayer from "../ui/VideoPlayer";

// ======================================================================
// 1. ARCHIVE DISCOVERY PROJECT COMPONENT
// ======================================================================
export default function ArchiveDiscoveryProject() {
  return (
    <div className="glass-panel rounded-[2rem] px-4 py-8 md:p-12 relative overflow-hidden group border border-white/5 bg-black/40 mt-16">
      <div className="glow-blob bg-blue-900/40 bottom-0 left-0 w-[500px] h-[500px] blur-[120px] -z-10 transition-opacity duration-700 group-hover:opacity-60 transform-gpu" />

      <div className="flex flex-col gap-16 relative z-10">
        {/* TEXT CONTENT */}
        <div className="max-w-3xl space-y-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold border border-blue-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              API INTEGRATION
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/20">
              FULL STACK
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Archive Discovery
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A cinematic platform rescuing public domain films from obscurity.
              I engineered a dual-pipeline architecture: pulling high-fidelity
              metadata from <span className="text-white font-medium">TMDB</span>{" "}
              and marrying it seamlessly with raw video feeds from the{" "}
              <span className="text-white font-medium">Archive.org API</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureItem
              icon={<Database className="w-4 h-4 text-purple-400" />}
              text="Neon Postgres"
            />
            <FeatureItem
              icon={<Server className="w-4 h-4 text-blue-400" />}
              text="Vercel Serverless"
            />
            <FeatureItem
              icon={<Film className="w-4 h-4 text-red-400" />}
              text="TMDB API"
            />
            <FeatureItem
              icon={<Activity className="w-4 h-4 text-amber-400" />}
              text="Custom Player"
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://archive-discovery.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Platform
            </a>
          </div>
        </div>

        {/* VISUAL PIPELINE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: Raw JSON to UI Slider */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 mb-2">
              <span className="text-blue-400">Step 1:</span> Data Transformation
            </div>
            <DataToUISlider />
          </div>

          {/* RIGHT: The Custom Video Player */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 mb-2">
              <span className="text-amber-400">Step 2:</span> Custom Media
              Engineering
            </div>
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl relative bg-black">
              <VideoPlayer src="/notld-video.mp4" poster="/notld.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ======================================================================
// 2. DATA TO UI SLIDER COMPONENT
// ======================================================================
function DataToUISlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!isDragging) return;
      handleMove(e.clientX || (e.touches && e.touches[0].clientX));
    };
    const onPointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("touchmove", onPointerMove, { passive: false });
      window.addEventListener("mouseup", onPointerUp);
      window.addEventListener("touchend", onPointerUp);
    }

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/10 shadow-2xl select-none"
    >
      {/* BACKGROUND LAYER: RENDERED UI (Right Side) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[url('/notld.jpg')] bg-cover bg-center opacity-20 blur-2xl"></div>

        {/* EXACT MEDIA GRID CARD REPLICA */}
        {/* FIX: Removed margins so it centers perfectly. Added group/card named group. */}
        <div className="relative w-[180px] sm:w-[220px] flex flex-col bg-[#121212] rounded-md overflow-hidden border border-white/10 shadow-2xl hover:border-amber-500/50 transition-all duration-300 group/card">
          {/* POSTER CONTAINER */}
          <div className="aspect-[2/3] w-full relative border-b border-white/10 bg-black overflow-hidden">
            <Image
              src="/notld.jpg"
              alt="Night of the Living Dead"
              fill
              className="object-cover transition-transform duration-700 group-hover/card:scale-105 opacity-90 group-hover/card:opacity-100"
              sizes="220px"
            />
            {/* Verified Badge */}
            <div className="absolute top-2 right-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider shadow-black/50 shadow-md">
              Verified
            </div>
            {/* Runtime Badge */}
            <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] font-mono px-1.5 py-0.5 rounded-sm shadow-black/50 shadow-md">
              1h 36m
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="p-3 sm:p-4 flex flex-col flex-grow bg-[#121212]">
            {/* FIX: Replaced group-hover with group-hover/card */}
            <h3 className="text-sm sm:text-base font-bold text-gray-200 line-clamp-1 mb-1 group-hover/card:text-amber-500 transition-colors font-sans tracking-wide">
              Night of the Living Dead
            </h3>
            <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-500 mt-auto font-mono">
              <span>1968</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  2.4k
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  7.6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOREGROUND LAYER: RAW JSON (Left Side) */}
      <div
        className="absolute inset-0 bg-[#0d1117] will-change-transform"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <div className="absolute inset-0 w-full px-4 sm:px-8 flex flex-col justify-center font-mono text-[9px] sm:text-[11px] md:text-xs text-gray-300">
          <div className="whitespace-pre leading-tight sm:leading-snug">
            <span className="text-purple-400">async function</span>{" "}
            <span className="text-blue-400">fetchMovieData</span>() {"{\n"}
            {"  "}const res = await fetch(
            <span className="text-green-400">'/api/tmdb/103663'</span>);{"\n"}
            {"  "}return res.json();{"\n"}
            {"}\n"}
            <span className="text-gray-500">// Response Payload</span>
            {"\n"}
            {"{\n"}
            {"  "}
            <span className="text-blue-300">"id"</span>:{" "}
            <span className="text-amber-300">103663</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"title"</span>:{" "}
            <span className="text-green-400">"Night of the Living Dead"</span>,
            {"\n"}
            {"  "}
            <span className="text-blue-300">"release_date"</span>:{" "}
            <span className="text-green-400">"1968-10-01"</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"runtime"</span>:{" "}
            <span className="text-amber-300">96</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"vote_average"</span>:{" "}
            <span className="text-amber-300">7.6</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"downloads"</span>:{" "}
            <span className="text-amber-300">2453</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"poster_path"</span>:{" "}
            <span className="text-green-400">"/notld.jpg"</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">"archive_id"</span>:{" "}
            <span className="text-green-400">"night_of_the_living_dead"</span>
            {"\n"}
            {"}"}
          </div>
        </div>
      </div>

      {/* DRAG HANDLE */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize flex items-center justify-center z-20 touch-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        <div
          className={`w-6 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-300 transition-transform ${isDragging ? "scale-110" : ""}`}
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Hint Text */}
      <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-white/50 uppercase pointer-events-none mix-blend-difference z-30">
        Drag to Render
      </div>
    </div>
  );
}
