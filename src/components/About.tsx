import { FiCode, FiCpu, FiMapPin, FiBriefcase } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { personal, focusAreas, experience } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          label="About me"
          title={
            <>
              Turning ideas into <span className="chrome-text">polished</span> web experiences.
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2" delay={60}>
            <div className="glass-panel spot h-full rounded-3xl p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl sm:leading-relaxed">
                I'm a frontend web developer who builds responsive, production-ready interfaces with{" "}
                <span className="font-semibold text-white">React.js, TypeScript and Tailwind CSS</span> — from clean
                component architecture to smooth API integration.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Alongside that, I work practically with{" "}
                <span className="font-semibold text-white">AI/ML and LLM technologies</span> — fine-tuning models,
                building retrieval-augmented systems and preparing datasets for training.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel spot flex h-full flex-col justify-center gap-7 rounded-3xl p-8">
              {[
                { icon: <FiMapPin />, label: "Based in", value: personal.location },
                { icon: <FiBriefcase />, label: "Worked with", value: experience.map((e) => e.company).join(" · ") },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-lg text-black">
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-subtle)]">{f.label.toUpperCase()}</p>
                    <p className="mt-0.5 text-lg font-bold">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {[
            { ...focusAreas.primary, icon: <FiCode />, span: "md:col-span-2" },
            { ...focusAreas.secondary, icon: <FiCpu />, span: "" },
          ].map((area, i) => (
            <Reveal key={area.label} className={area.span} delay={160 + i * 60}>
              <div className="glass-panel spot h-full rounded-3xl p-8">
                <div className="flex items-center gap-3">
                  <span className="glass-soft grid h-11 w-11 place-items-center rounded-xl text-lg">{area.icon}</span>
                  <h3 className="text-xl font-bold tracking-tight">{area.label}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
