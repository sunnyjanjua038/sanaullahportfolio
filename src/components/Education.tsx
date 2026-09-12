import { FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-28">
      <Reveal>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-8 bg-[var(--color-cyan)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Education
          </p>
        </div>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
          Education
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 80}>
            <div className="h-full flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-cyan)]/50 hover:-translate-y-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] text-xl">
                <FiBookOpen />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--color-text)] leading-snug">
                  {item.degree}
                </h3>
                {item.institution && (
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.institution}
                  </p>
                )}
                <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">
                  {item.year}
                </p>
                {item.details && (
                  <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
