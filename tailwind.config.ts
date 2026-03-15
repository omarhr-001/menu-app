import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f1e8",
        foreground: "#1a1a1a",
        primary: "#c9a961",
        secondary: "#8b7355",
        accent: "#d4af37",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
