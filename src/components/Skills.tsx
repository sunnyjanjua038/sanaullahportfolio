import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

function slug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-28">
      <Reveal>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-8 bg-[var(--color-cyan)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Skills
          </p>
        </div>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
          What I work with
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-cyan)]/50 hover:-translate-y-1">
              <p className="font-mono text-xs text-[var(--color-muted)] mb-3">
                <span className="text-[var(--color-violet)]">import</span>{" "}
                &#123; {group.skills.length} skills &#125;{" "}
                <span className="text-[var(--color-violet)]">from</span>{" "}
                <span className="text-[var(--color-amber)]">
                  "./{slug(group.title)}"
                </span>
              </p>
              <h3 className="font-semibold text-[var(--color-text)] mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
