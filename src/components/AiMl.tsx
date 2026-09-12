import { FiCpu } from "react-icons/fi";
import Reveal from "./Reveal";
import { aiMl } from "../data/portfolio";

export default function AiMl() {
  return (
    <section
      id="ai-ml"
      className="relative py-24 sm:py-28 border-y border-[var(--color-border)] bg-[var(--color-surface)]/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-px w-8 bg-[var(--color-violet)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Specialization
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FiCpu className="text-2xl text-[var(--color-violet)]" />
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
              {aiMl.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <Reveal delay={80}>
            <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              {aiMl.summary}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {aiMl.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-violet)]" />
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
