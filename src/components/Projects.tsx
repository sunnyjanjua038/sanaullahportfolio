import { FiFolder } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/portfolio";

const categoryColor: Record<string, string> = {
  frontend: "var(--color-cyan)",
  ai: "var(--color-violet)",
};

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-28">
      <Reveal>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-8 bg-[var(--color-cyan)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Projects
          </p>
        </div>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
          Things I've built
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 4) * 80}>
            <div className="h-full flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-cyan)]/50 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <FiFolder
                  className="text-xl"
                  style={{ color: categoryColor[project.category] }}
                />
                <span className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
                  {project.category === "ai" ? "ai / ml" : "frontend"}
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-[var(--color-text)]">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none"
                    style={{
                      borderColor: `color-mix(in srgb, ${categoryColor[project.category]} 35%, transparent)`,
                      backgroundColor: `color-mix(in srgb, ${categoryColor[project.category]} 10%, transparent)`,
                      color: categoryColor[project.category],
                    }}
                  >
                    {tag}
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
