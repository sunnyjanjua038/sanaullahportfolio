import type { ReactNode } from "react";
import { FiArrowRight, FiDownload, FiCode, FiCpu, FiGlobe } from "react-icons/fi";
import { personal, liveProjects, experience, skillGroups } from "../data/portfolio";

const totalSkills = skillGroups.reduce((n, g) => n + g.skills.length, 0);

const stats = [
  { value: `${liveProjects.length}`, label: "Live projects" },
  { value: `${experience.length}`, label: "Companies" },
  { value: `${Math.floor(totalSkills / 10) * 10}+`, label: "Technologies" },
];

function FloatChip({ icon, label, className }: { icon: ReactNode; label: string; className: string }) {
  return (
    <div className={`glass-panel absolute z-20 flex items-center gap-2.5 rounded-2xl !bg-black/55 py-2 pl-2 pr-4 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-white text-[15px] text-black">{icon}</span>
      <span className="whitespace-nowrap text-[13px] font-semibold">{label}</span>
    </div>
  );
}

function Portrait() {
  return (
    <div className="fade-up relative mx-auto w-full max-w-[420px] pt-[14%]" style={{ animationDelay: "150ms" }}>
      <div className="relative aspect-square">
        <div className="chrome-ring absolute -inset-4 rounded-full opacity-70" />
        <div className="glass-panel absolute inset-0 overflow-hidden rounded-full !bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_60%)]">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* photo clipped by the disc at the bottom, head pops out above */}
        <div className="absolute inset-x-0 bottom-0 h-[118%] overflow-hidden rounded-b-full">
          <img
            src="/sana-ullah.webp"
            alt={`${personal.name}, ${personal.title}`}
            width={492}
            height={1100}
            fetchPriority="high"
            className="absolute left-1/2 top-0 w-[68%] max-w-none -translate-x-[48%] drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
          />
        </div>

        <FloatChip icon={<FiCode />} label="React · TypeScript" className="float -left-4 top-[30%] sm:-left-12" />
        <FloatChip icon={<FiCpu />} label="LLMs · RAG" className="float-delay -right-3 top-[6%] sm:-right-8" />
        <FloatChip
          icon={<FiGlobe />}
          label={`${liveProjects.length} live websites`}
          className="float -right-2 bottom-[10%] sm:-right-10"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-36 lg:pb-24">
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div className="fade-up min-w-0">
          <span className="glass-soft inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-sm text-[var(--color-muted)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </span>

          <p className="mt-8 font-mono text-xs tracking-[0.3em] text-[var(--color-accent)]">HELLO, I'M</p>
          <h1 className="mt-2 text-6xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[5.4rem]">
            <span className="chrome-text">Sana Ullah</span>
          </h1>
          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            I craft{" "}
            <span className="font-serif text-[1.15em] font-normal italic text-[var(--color-accent)]">beautiful</span>, fast
            interfaces for the web.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">{personal.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-chrome group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:scale-[1.03]"
            >
              See my work
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={personal.cvPath}
              download
              className="glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:!border-white/40"
            >
              <FiDownload />
              Download CV
            </a>
          </div>

          <dl className="glass-soft mt-12 inline-grid grid-cols-3 divide-x divide-white/10 rounded-2xl">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse px-6 py-4 sm:px-8">
                <dt className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">{s.label}</dt>
                <dd className="chrome-text text-3xl font-extrabold sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-8 sm:px-12 lg:px-4">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
