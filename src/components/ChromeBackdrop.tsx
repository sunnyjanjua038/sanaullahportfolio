/**
 * Fixed, full-viewport backdrop of flowing liquid-chrome ribbons —
 * gives the frosted glass panels something to blur.
 */
export default function ChromeBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="chromeA" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0" stopColor="#0a0a0c" />
            <stop offset="0.3" stopColor="#4a4a52" />
            <stop offset="0.48" stopColor="#f4f4f7" />
            <stop offset="0.56" stopColor="#7a7a84" />
            <stop offset="0.75" stopColor="#1c1c20" />
            <stop offset="0.9" stopColor="#bdbdc5" />
            <stop offset="1" stopColor="#0a0a0c" />
          </linearGradient>
          <linearGradient id="chromeB" x1="1" y1="0" x2="0" y2="0.4">
            <stop offset="0" stopColor="#0a0a0c" />
            <stop offset="0.35" stopColor="#d6d6dc" />
            <stop offset="0.45" stopColor="#3a3a41" />
            <stop offset="0.7" stopColor="#9a9aa4" />
            <stop offset="1" stopColor="#0a0a0c" />
          </linearGradient>
          <filter id="soft" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="softer" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <radialGradient id="vignette" cx="0.5" cy="0.45" r="0.75">
            <stop offset="0.35" stopColor="#070708" stopOpacity="0" />
            <stop offset="1" stopColor="#070708" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        <g className="drift">
          <path
            d="M-200 620 C 150 420, 520 860, 920 600 S 1500 280, 1700 420"
            fill="none"
            stroke="url(#chromeA)"
            strokeWidth="190"
            strokeLinecap="round"
            opacity="0.55"
            filter="url(#soft)"
          />
          <path
            d="M-200 620 C 150 420, 520 860, 920 600 S 1500 280, 1700 420"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            opacity="0.35"
            transform="translate(0 -80)"
          />
        </g>

        <g className="drift-slow">
          <path
            d="M-150 210 C 260 60, 620 420, 1020 230 S 1520 40, 1700 140"
            fill="none"
            stroke="url(#chromeB)"
            strokeWidth="110"
            strokeLinecap="round"
            opacity="0.32"
            filter="url(#soft)"
          />
          <path
            d="M-120 980 C 300 760, 720 1060, 1120 830 S 1600 700, 1720 760"
            fill="none"
            stroke="url(#chromeB)"
            strokeWidth="260"
            strokeLinecap="round"
            opacity="0.4"
            filter="url(#softer)"
          />
        </g>

        <rect width="1440" height="900" fill="url(#vignette)" />
      </svg>

      {/* fine grain */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
}
