import Reveal from "./Reveal";
import Crystal from "./Crystal";
import { aiMl } from "../data/portfolio";

export default function AiMl() {
  return (
    <section id="ai-ml" className="py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#9ea6ff]/15 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
              <div>
                <p className="eyebrow">
                  <b>03</b>
                  Specialization
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  AI &amp; <span className="chrome-text">Machine Learning</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">{aiMl.summary}</p>
                <Crystal className="mt-8 hidden h-36 w-36 lg:block" />
              </div>

              <ul className="grid content-start gap-3 sm:grid-cols-2">
                {aiMl.capabilities.map((cap, i) => (
                  <li
                    key={cap}
                    className="glass-soft group flex items-center gap-3 rounded-2xl p-4 text-sm transition-colors hover:!border-white/30 hover:!bg-white/[0.08]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/15 font-mono text-xs text-white/70 transition-colors group-hover:bg-white group-hover:text-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/90">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
