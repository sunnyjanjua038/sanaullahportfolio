import { FiMapPin, FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import { personal, focusAreas } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-28">
      <Reveal>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-8 bg-[var(--color-cyan)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            About
          </p>
        </div>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
          Who I am
        </h2>
      </Reveal>

      <div className="mt-10 grid md:grid-cols-[1.3fr_1fr] gap-10">
        <Reveal delay={80}>
          <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            I'm a frontend developer who builds responsive, production-ready
            interfaces with React.js, Next.js, TypeScript and Tailwind CSS —
            from clean component architecture to smooth API integration.
            Frontend development is my primary focus and where I spend most
            of my time, and I'm currently expanding into backend development
            to grow into a full-stack role.
          </p>
          <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            Alongside that, I work practically with AI/ML and LLM technologies —
            fine-tuning open-source models like Qwen2.5 and Mistral-7B, and
            building retrieval-augmented (RAG) systems. It's a specialization
            I bring into projects where it adds real value, not my primary
            job title.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
              <FiBriefcase className="text-[var(--color-cyan)]" />
              Currently Frontend Developer at{" "}
              <span className="font-semibold">Zie Pie</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
              <FiMapPin className="text-[var(--color-violet)]" />
              {personal.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-cyan)] mb-3">
                {focusAreas.primary.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.primary.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-violet)] mb-3">
                {focusAreas.secondary.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.secondary.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
