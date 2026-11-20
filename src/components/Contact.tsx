import { FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import Crystal from "./Crystal";
import { personal } from "../data/portfolio";

export default function Contact() {
  const channels = [
    { icon: <FiMail />, label: "Email me", value: personal.email, href: personal.emailHref },
    { icon: <FiPhone />, label: "Call me", value: personal.phone, href: personal.phoneHref },
  ];

  return (
    <section id="contact" className="pb-24 pt-12 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-[110px]" />
            <Crystal className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-80 sm:right-6 sm:top-6" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="eyebrow">
                <b>06</b>
                Contact
              </p>
              <h2 className="mt-6 text-5xl font-extrabold leading-[1] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Let's build something <span className="chrome-text">amazing</span>
                <span className="font-serif font-normal italic text-[var(--color-accent)]"> together.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Have a frontend build or an AI/ML idea in mind? I'd love to hear about it.
              </p>

              <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-[1.25fr_1fr]">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="glass-soft group flex items-center gap-4 rounded-2xl p-4 text-left transition-all hover:-translate-y-0.5 hover:!border-white/30"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-lg text-black">
                      {c.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] tracking-[0.2em] text-[var(--color-subtle)]">
                        {c.label.toUpperCase()}
                      </span>
                      <span className="block truncate text-[15px] font-semibold">{c.value}</span>
                    </span>
                    <FiArrowUpRight className="shrink-0 text-white/50 transition-transform group-hover:rotate-45 group-hover:text-white" />
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={personal.cvPath}
                  download
                  className="btn-chrome inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.03]"
                >
                  <FiDownload /> Download CV
                </a>
                {personal.social.github && (
                  <a
                    href={personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="glass-soft grid h-12 w-12 place-items-center rounded-full text-lg hover:!border-white/40"
                  >
                    <FiGithub />
                  </a>
                )}
                {personal.social.linkedin && (
                  <a
                    href={personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="glass-soft grid h-12 w-12 place-items-center rounded-full text-lg hover:!border-white/40"
                  >
                    <FiLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
