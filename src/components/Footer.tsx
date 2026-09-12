import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[var(--color-muted)]">
        <p>
          © {year} {personal.name}. Built with React &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          className="hover:text-[var(--color-cyan)] transition-colors"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
