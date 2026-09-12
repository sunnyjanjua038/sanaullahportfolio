import { useEffect, useState } from "react";
import { FiArrowDown, FiMail, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolio";

const CODE_LINES = [
  { indent: 0, content: [{ t: "const", c: "kw" }, { t: " developer = {", c: "text" }] },
  { indent: 1, content: [{ t: "name", c: "prop" }, { t: ": ", c: "text" }, { t: '"Sana Ullah"', c: "str" }, { t: ",", c: "text" }] },
  { indent: 1, content: [{ t: "role", c: "prop" }, { t: ": ", c: "text" }, { t: '"Frontend Developer"', c: "str" }, { t: ",", c: "text" }] },
  { indent: 1, content: [{ t: "stack", c: "prop" }, { t: ": [", c: "text" }, { t: '"React.js"', c: "str" }, { t: ", ", c: "text" }, { t: '"TypeScript"', c: "str" }, { t: ", ", c: "text" }, { t: '"Tailwind"', c: "str" }, { t: "],", c: "text" }] },
  { indent: 1, content: [{ t: "specialization", c: "prop" }, { t: ": ", c: "text" }, { t: '"AI/ML & LLM Development"', c: "str" }, { t: ",", c: "text" }] },
  { indent: 1, content: [{ t: "currentlyAt", c: "prop" }, { t: ": ", c: "text" }, { t: '"Zie Pie"', c: "str" }] },
  { indent: 0, content: [{ t: "};", c: "text" }] },
];

const colorMap: Record<string, string> = {
  kw: "text-[var(--color-violet)]",
  prop: "text-[var(--color-cyan)]",
  str: "text-[var(--color-amber)]",
  text: "text-[var(--color-text)]",
};

function TypedCode() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  const flatLines = CODE_LINES.map((l) => ({
    indent: l.indent,
    full: l.content.map((seg) => seg.t).join(""),
  }));

  useEffect(() => {
    if (lineIdx >= flatLines.length) {
      setDone(true);
      return;
    }
    const currentFull = flatLines[lineIdx].full;
    if (charIdx < currentFull.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18 + Math.random() * 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 120);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIdx, charIdx]);

  const renderSegments = (segs: { t: string; c: string }[], limit: number) => {
    let remaining = limit;
    return segs.map((seg, i) => {
      if (remaining <= 0) return null;
      const slice = seg.t.slice(0, remaining);
      remaining -= slice.length;
      return (
        <span key={i} className={colorMap[seg.c]}>
          {slice}
        </span>
      );
    });
  };

  return (
    <pre className="font-mono text-[13px] sm:text-sm leading-6 overflow-x-auto">
      {CODE_LINES.map((line, i) => {
        if (i > lineIdx) return null;
        const isCurrent = i === lineIdx && !done;
        const limit = isCurrent ? charIdx : line.content.reduce((a, s) => a + s.t.length, 0);
        return (
          <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
            {renderSegments(line.content, limit)}
            {isCurrent && <span className="caret text-[var(--color-cyan)]">▍</span>}
          </div>
        );
      })}
      {done && <span className="caret text-[var(--color-cyan)]">▍</span>}
    </pre>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid pt-28 pb-16 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[var(--color-cyan)]/10 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[var(--color-violet)]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-[13px] text-[var(--color-cyan)] mb-4">
            hi, my name is
          </p>
          <h1 className="font-[var(--font-display)] font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-[var(--color-text)]">
            {personal.name}
          </h1>
          <p className="mt-3 font-[var(--font-display)] text-2xl sm:text-3xl text-gradient font-semibold">
            {personal.title}
          </p>
          <p className="mt-1 font-mono text-sm text-[var(--color-muted)]">
            {personal.subtitles.join("  ·  ")}
          </p>
          <p className="mt-6 max-w-xl text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            >
              View My Work
              <FiArrowDown className="text-base" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-violet)] hover:text-[var(--color-violet)] transition-colors"
            >
              <FiMail className="text-base" />
              Contact Me
            </a>
            <a
              href={personal.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <FiDownload className="text-base" />
              Download CV
            </a>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
                developer.ts
              </span>
            </div>
            <div className="p-5">
              <TypedCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
