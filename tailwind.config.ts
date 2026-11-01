import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          forest: "#1B4332",
          deep: "#0D2818",
          emerald: "#10B981",
          pine: "#2D6A4F",
          leaf: "#40916C",
          mint: "#52B788",
          sage: "#74C69D",
          moss: "#14382A",
          teal: "#059669",
        },
        dark: {
          bg: "#060B08",
          card: "#0A1410",
          cardHover: "#0F1E18",
          border: "#162E22",
          muted: "#85988D",
        },
        light: {
          bg: "#F6F8F6",
          card: "#FFFFFF",
          cardHover: "#EFF4F0",
          border: "#DFE7E1",
          muted: "#5C6E64",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "forest-glow": "linear-gradient(135deg, #10B981 0%, #1B4332 100%)",
        "forest-glow-reverse": "linear-gradient(135deg, #1B4332 0%, #10B981 100%)",
        "botanical-glow": "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 65%)",
      },
      boxShadow: {
        "glow-emerald": "0 0 35px -5px rgba(16, 185, 129, 0.35)",
        "glow-forest": "0 0 35px -5px rgba(27, 67, 50, 0.45)",
        "glow-mint": "0 0 30px -5px rgba(82, 183, 136, 0.3)",
        "glow-subtle": "0 10px 30px -10px rgba(16, 185, 129, 0.15)",
        "glass-sm": "0 4px 20px -2px rgba(0, 0, 0, 0.08)",
        "glass-lg": "0 10px 35px -5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
