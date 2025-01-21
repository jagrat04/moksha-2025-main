import type { Config } from "tailwindcss";

export default {
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
      },
      backgroundImage: { 'bg-gradient': 'linear-gradient(105deg, rgba(5,18,63,1) 0%, rgba(2,7,24,1) 50%, rgba(2,7,24,1) 100%)', },
    },
  },
  plugins: [],
} satisfies Config;
