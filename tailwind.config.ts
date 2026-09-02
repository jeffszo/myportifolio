import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "#08090d",
        "ink-soft": "#0e1016",
        card: "#12141c",
        line: "#1f2330",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(90deg, #2dd4bf, #818cf8)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
