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
        orange: "#E69400",
        oceanBlue: "#2961A6",
        steelBlue: "#334A66",
        blue: "#0068E6",
        gold: "#916E30",
        brown: "#3C3428",
      },
    },
  },
  plugins: [],
};
export default config;
