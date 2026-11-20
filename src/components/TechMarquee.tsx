import { skillGroups } from "../data/portfolio";

const items = Array.from(new Set(skillGroups.flatMap((g) => g.skills))).filter((s) => s.length <= 22);

export default function TechMarquee() {
  const row = [...items, ...items];
  return (
    <div className="px-5 sm:px-8" aria-hidden="true">
      <div className="glass-soft marquee-mask mx-auto max-w-6xl overflow-hidden rounded-2xl py-5">
        <div className="marquee flex w-max items-center gap-10">
          {row.map((tech, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-semibold text-white/45">
              {tech}
              <span className="text-sm text-white/70">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
