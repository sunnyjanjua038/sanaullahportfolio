import { FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          label="Experience"
          title={
            <>
              Where I've <span className="chrome-text">worked</span>
            </>
          }
        />

        <div className="relative mt-16">
          <div className="absolute bottom-4 left-[23px] top-4 w-px bg-gradient-to-b from-white/60 via-white/15 to-transparent md:left-[27px]" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 120}>
                <div id={`exp-${job.id}`} className="relative scroll-mt-24 pl-16 md:pl-20">
                  <span className="absolute left-0 top-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-white to-[#c8c8cf] text-lg text-black shadow-[0_0_30px_-6px_rgba(255,255,255,0.5)] md:h-14 md:w-14">
                    <FiBriefcase />
                  </span>

                  <article className="glass-panel spot rounded-3xl p-7 sm:p-9">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{job.role}</h3>
                        <p className="chrome-text mt-1 inline-block text-lg font-semibold">{job.company}</p>
                      </div>
                      <span className="chip font-mono !text-xs">{job.period}</span>
                    </div>

                    <p className="mt-4 text-[var(--color-muted)]">{job.summary}</p>

                    <ul className="mt-6 grid gap-x-8 gap-y-3 lg:grid-cols-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--color-accent)]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
