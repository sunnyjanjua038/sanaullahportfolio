import { FiArrowUpRight, FiCode, FiCpu } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects, liveProjects, type LiveProject } from "../data/portfolio";

function hostOf(url: string) {
  return new URL(url).host;
}

function LiveCard({ project, index }: { project: LiveProject; index: number }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-panel spot group flex h-full flex-col rounded-3xl p-3 transition-transform duration-500 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] border border-white/10 bg-black">
        <img
          src={project.image}
          alt={`${project.name} homepage screenshot`}
          loading="lazy"
          width={1440}
          height={900}
          className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="glass-panel absolute left-3 top-3 rounded-full !bg-black/65 px-3 py-1 text-xs font-medium">{project.kind}</span>
        <span className="btn-chrome absolute bottom-4 right-4 inline-flex translate-y-3 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Visit site <FiArrowUpRight />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[var(--color-subtle)]">
              {String(index + 1).padStart(2, "0")} / {hostOf(project.url)}
            </span>
            <h3 className="mt-1.5 text-2xl font-bold tracking-tight">{project.name}</h3>
          </div>
          <span className="glass-soft grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg transition-all duration-300 group-hover:rotate-45 group-hover:!bg-white group-hover:text-black">
            <FiArrowUpRight />
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((h) => (
            <span key={h} className="chip !text-xs">
              {h}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          label="Projects"
          title={
            <>
              Things I've <span className="chrome-text">built &amp; shipped</span>
            </>
          }
          intro="Real, deployed websites and apps — open any card to visit the live site."
        />

        <div id="live-projects" className="mt-14 grid scroll-mt-24 gap-6 md:grid-cols-2">
          {liveProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 120} className="h-full">
              <LiveCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div id="more-work" className="scroll-mt-24 pt-24">
            <h3 className="text-3xl font-extrabold tracking-tight">More work</h3>
            <p className="mt-2 text-[var(--color-muted)]">Professional, internship and AI/ML projects.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isAi = project.category === "ai";
            return (
              <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
                <div className="glass-panel spot flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="glass-soft grid h-11 w-11 place-items-center rounded-xl text-lg">
                      {isAi ? <FiCpu /> : <FiCode />}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-black">
                      {isAi ? "AI / ML" : "Frontend"}
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg font-bold tracking-tight">{project.name}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] text-[var(--color-subtle)]">
                        #{tag.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
