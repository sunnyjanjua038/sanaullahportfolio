import { FiArrowUp } from "react-icons/fi";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 pb-6 sm:px-8">
      <div className="glass-soft mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-5 py-4">
        <p className="text-sm text-[var(--color-muted)]">
          © {year} <span className="font-semibold text-white">{personal.name}</span>
          <span className="hidden sm:inline"> · Frontend Developer</span>
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black transition-transform hover:-translate-y-0.5"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
