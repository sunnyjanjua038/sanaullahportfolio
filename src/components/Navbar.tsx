import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { personal } from "../data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** Which nav section is in view (null while on the hero). */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

/** Glass once scrolled; hide on scroll down, reveal on scroll up. */
function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 240);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { scrolled, hidden };
}

export default function Navbar() {
  const active = useActiveSection();
  const { scrolled, hidden } = useScrollState();
  const [open, setOpen] = useState(false);

  // sliding indicator under the active link
  const listRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  useLayoutEffect(() => {
    const update = () => {
      // measure the <li> — its offsetParent is the relative <ul>
      const el = active ? listRef.current?.querySelector<HTMLElement>(`a[href="#${active}"]`)?.parentElement : null;
      setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  // mobile menu: lock scroll, close on Escape, close when resized to desktop
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={`px-3 transition-[padding] duration-500 sm:px-5 ${solid ? "pt-3" : "pt-5"}`}>
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl pl-4 pr-2 transition-all duration-500 ${
            solid ? "glass-panel" : "border border-transparent"
          }`}
        >
          {/* wordmark */}
          <a href="#top" onClick={() => setOpen(false)} className="group flex items-center gap-2.5" aria-label={`${personal.name} — home`}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-b from-white to-[#c8c8cf] text-[12px] font-extrabold tracking-tight text-black shadow-[inset_0_1px_0_#fff]">
              SU
            </span>
            <span className="text-[15px] font-bold tracking-tight">{personal.name}</span>
          </a>

          {/* links */}
          <ul ref={listRef} className="relative hidden items-center md:flex">
            {indicator && (
              <span
                aria-hidden="true"
                className="glass-pill absolute top-1/2 h-9 -translate-y-1/2 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-xl px-4 py-2 text-[14px] transition-colors ${
                      isActive ? "font-medium text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn-chrome hidden items-center gap-1.5 rounded-xl px-4 py-2 text-[13px] font-bold transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Hire me <FiArrowUpRight />
            </a>

            {/* hamburger → X */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center rounded-xl md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span
                className={`absolute h-[1.5px] w-5 rounded bg-white transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-5 rounded bg-white transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div
          id="mobile-menu"
          className={`mx-auto mt-2 max-w-6xl transition-all duration-300 md:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/15 bg-[#121216]/95 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
            <ul>
              {links.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[17px] transition-colors ${
                      active === link.id ? "bg-white/[0.07] font-semibold text-white" : "text-white/70"
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-[11px] text-white/30">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 p-2 pt-4">
              <a
                href={personal.cvPath}
                download
                className="glass-soft inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold"
              >
                <FiDownload /> CV
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-chrome inline-flex items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-bold"
              >
                Hire me <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
