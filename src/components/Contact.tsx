import { useState, type FormEvent } from "react";
import { FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { personal } from "../data/portfolio";

const WHATSAPP_NUMBER = "923017919027";

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address";
    }
    if (!message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setSent(false);
      return;
    }
    const text = `Hi Sana, my name is ${name}.\nEmail: ${email}\n\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Reveal>
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 bg-[var(--color-cyan)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Contact
            </p>
            <span className="h-px w-8 bg-[var(--color-cyan)]" />
          </div>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--color-text)]">
            Let's work together
          </h2>
          <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg max-w-lg mx-auto">
            Have a frontend build or an AI/ML idea in mind? Send a message
            below and it'll open directly in WhatsApp to reach me.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-1.5"
                >
                  Name <span className="text-[var(--color-violet)]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={`w-full rounded-lg border bg-[var(--color-bg)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-cyan)] ${
                    errors.name ? "border-red-400" : "border-[var(--color-border)]"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-1.5"
                >
                  Email <span className="text-[var(--color-violet)]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full rounded-lg border bg-[var(--color-bg)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-cyan)] ${
                    errors.email ? "border-red-400" : "border-[var(--color-border)]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-1.5"
              >
                Message <span className="text-[var(--color-violet)]">*</span>
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me a bit about your project..."
                rows={5}
                className={`w-full resize-none rounded-lg border bg-[var(--color-bg)] px-3.5 py-2.5 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-cyan)] ${
                  errors.message ? "border-red-400" : "border-[var(--color-border)]"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-black hover:bg-[#1ebe57] transition-colors"
            >
              <FaWhatsapp className="text-lg" /> Send Message
            </button>

            {sent && (
              <p className="mt-3 text-xs text-[var(--color-cyan)]">
                Message sent — thanks for reaching out!
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personal.emailHref}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[var(--color-text)] text-[var(--color-bg)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-cyan)] transition-colors"
            >
              <FiMail /> {personal.email}
            </a>
            <a
              href={personal.phoneHref}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-violet)] hover:text-[var(--color-violet)] transition-colors"
            >
              <FiPhone /> {personal.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            {personal.social.github && (
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] text-xl transition-colors"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            )}
            {personal.social.linkedin && (
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted)] hover:text-[var(--color-text)] text-xl transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            )}
            <a
              href={personal.cvPath}
              download
              className="flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-cyan)] transition-colors"
            >
              <FiDownload /> download cv
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
