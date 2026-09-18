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
      colors: {
        brand: {
          teal: "#00D9C0",
          indigo: "#6366F1",
          cyan: "#38BDF8",
          purple: "#A855F7",
        },
        dark: {
          bg: "#0A0A0B",
          card: "#121316",
          cardHover: "#18191E",
          border: "#20222B",
          muted: "#8A8F9E",
        },
        light: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          cardHover: "#F1F5F9",
          border: "#E2E8F0",
          muted: "#64748B",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "electric-glow": "linear-gradient(135deg, #00D9C0 0%, #6366F1 100%)",
        "electric-glow-reverse": "linear-gradient(135deg, #6366F1 0%, #00D9C0 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 35px -5px rgba(0, 217, 192, 0.3)",
        "glow-indigo": "0 0 35px -5px rgba(99, 102, 241, 0.3)",
        "glow-subtle": "0 10px 30px -10px rgba(0, 217, 192, 0.15)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
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
