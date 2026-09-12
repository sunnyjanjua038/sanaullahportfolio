import { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { navLinks, personal } from "../data/portfolio";
import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur border-[var(--color-border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text)] tracking-tight"
          aria-label="Back to top"
        >
          Sana<span className="text-[var(--color-cyan)]">.</span>Ullah
        </a>

        <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-md text-[var(--color-text)]/70 hover:text-[var(--color-cyan)] hover:bg-[var(--color-surface)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun className="text-[15px]" /> : <FiMoon className="text-[15px]" />}
          </button>
          <a
            href={personal.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-3.5 py-2 text-[13px] font-medium text-[var(--color-text)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors"
          >
            <FiDownload className="text-[15px]" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun className="text-[15px]" /> : <FiMoon className="text-[15px]" />}
          </button>
          <button
            className="text-[var(--color-text)] text-2xl"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur px-5 py-4">
          <ul className="flex flex-col gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2.5 rounded-md text-[var(--color-text)]/70 hover:text-[var(--color-cyan)] hover:bg-[var(--color-surface)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.cvPath}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-[var(--color-border)] px-3.5 py-2.5 text-sm font-medium hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
              >
                <FiDownload /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
