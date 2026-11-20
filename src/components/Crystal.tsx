/** Faceted iridescent crystal with an orbit ring — sidebar card art. */
export default function Crystal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5f3ff" />
          <stop offset="1" stopColor="#a5b0ff" />
        </linearGradient>
        <linearGradient id="fb" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9bcff" />
          <stop offset="1" stopColor="#5b5fc7" />
        </linearGradient>
        <linearGradient id="fc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7d86e8" />
          <stop offset="1" stopColor="#2b2d6e" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#b9b4ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#b9b4ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="60" cy="58" r="44" fill="url(#glow)" />
      {/* back half of orbit */}
      <ellipse cx="60" cy="66" rx="48" ry="11" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />

      {/* crystal facets */}
      <polygon points="60,10 44,56 60,66" fill="url(#fa)" />
      <polygon points="60,10 76,56 60,66" fill="url(#fb)" />
      <polygon points="44,56 60,110 60,66" fill="url(#fb)" opacity="0.9" />
      <polygon points="76,56 60,110 60,66" fill="url(#fc)" />
      <polyline points="60,10 44,56 60,110 76,56 60,10" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="0.6" />

      {/* front half of orbit */}
      <path d="M12 66 A48 11 0 0 0 108 66" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1.2" />

      {/* sparkles */}
      <path className="twinkle" d="M96 22 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5z" fill="#fff" />
      <path className="twinkle" style={{ animationDelay: "1s" }} d="M22 30 l1 2.6 2.6 1 -2.6 1 -1 2.6 -1 -2.6 -2.6 -1 2.6 -1z" fill="#fff" />
      <circle className="twinkle" style={{ animationDelay: "0.5s" }} cx="100" cy="92" r="1.2" fill="#fff" />
    </svg>
  );
}
