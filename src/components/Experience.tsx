import { FiGitCommit } from "react-icons/fi";
import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-28">
      <Reveal>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-8 bg-[var(--color-cyan)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Experience
          </p>
        </div>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
          Where I've worked
        </h2>
      </Reveal>

      <div className="mt-12 relative">
        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-[var(--color-border)]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 100}>
              <div className="relative pl-9">
                <span
                  className={`absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border ${
                    job.current
                      ? "border-[var(--color-cyan)] bg-[var(--color-cyan)]/15"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]"
                  }`}
                >
                  <FiGitCommit
                    className={`text-[11px] ${
                      job.current ? "text-[var(--color-cyan)]" : "text-[var(--color-muted)]"
                    }`}
                  />
                </span>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-muted)]">
                    <span className="text-[var(--color-amber)]">#{job.id}</span>
                    <span>{job.period}</span>
                    {job.location && (
                      <span className="rounded-full bg-[var(--color-violet)]/15 text-[var(--color-violet)] px-2 py-0.5">
                        {job.location}
                      </span>
                    )}
                    {job.current && (
                      <span className="rounded-full bg-[var(--color-cyan)]/15 text-[var(--color-cyan)] px-2 py-0.5">
                        current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                    {job.role}{" "}
                    <span className="text-[var(--color-muted)] font-normal">
                      @ {job.company}
                    </span>
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed"
                      >
                        <span className="font-mono text-[var(--color-cyan)] shrink-0">+</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
