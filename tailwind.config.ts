import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07060f",
          surface: "#0f0d24",
          raised: "#171336",
        },
        neon: {
          magenta: "#ff2bd6",
          pink: "#ff4d8d",
          cyan: "#00f0ff",
          blue: "#3b6dff",
          amber: "#ffb020",
          yellow: "#ffe14d",
          green: "#39ff8a",
          purple: "#a855f7",
        },
        ink: {
          DEFAULT: "#f4f1ff",
          muted: "#b9b3d9",
          dim: "#7a7399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        pixel: ["var(--font-pixel)", "ui-monospace", "monospace"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "neon-magenta": "0 0 0 1px rgba(255,43,214,0.4), 0 0 24px rgba(255,43,214,0.45)",
        "neon-cyan": "0 0 0 1px rgba(0,240,255,0.4), 0 0 24px rgba(0,240,255,0.45)",
        "neon-amber": "0 0 0 1px rgba(255,176,32,0.4), 0 0 24px rgba(255,176,32,0.5)",
      },
      backgroundImage: {
        grid: "linear-gradient(transparent 95%, rgba(255,255,255,0.06) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.06) 95%)",
        scanlines:
          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px)",
      },
      animation: {
        flicker: "flicker 4s infinite",
        scan: "scan 8s linear infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%,19%,21%,23%,25%,54%,56%,100%": { opacity: "1" },
          "20%,24%,55%": { opacity: "0.5" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%,100%": { filter: "drop-shadow(0 0 8px currentColor)" },
          "50%": { filter: "drop-shadow(0 0 22px currentColor)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
