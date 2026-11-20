import { FiLayout, FiPenTool, FiTool, FiCpu } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/portfolio";

const icons = [<FiLayout />, <FiPenTool />, <FiTool />, <FiCpu />];

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          label="Skills"
          center
          title={
            <>
              My <span className="chrome-text">tech stack</span>
            </>
          }
          intro="A modern frontend toolkit, backed by hands-on experience with LLMs, embeddings and retrieval."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 100} className="h-full">
              <div className="glass-panel spot h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-white to-[#c8c8cf] text-xl text-black shadow-[0_8px_24px_-8px_rgba(255,255,255,0.45)]">
                    {icons[i % icons.length]}
                  </span>
                  <span className="text-5xl font-extrabold text-white/[0.07]">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
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
