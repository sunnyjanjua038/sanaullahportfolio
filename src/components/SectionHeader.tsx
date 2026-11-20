import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  label,
  title,
  intro,
  center = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
        <p className="eyebrow">
          <b>{index}</b>
          {label}
        </p>
        <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{title}</h2>
        {intro && (
          <p className={`mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg ${center ? "mx-auto max-w-xl" : "max-w-xl"}`}>
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
