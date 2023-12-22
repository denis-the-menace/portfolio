import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        clr1: "#26233a",
        clr2: "#6e6a86",
        clr3: "#eb6f92",
        clr4: "#31748f",
        clr5: "#f6c177",
        clr6: "#9ccfd8",
        clr7: "#c4a7e7",
        clrpink: "#ebbcba",
        clr8: "#e0def4",
        clr9: "#303030",
        clrsurface: "#191724",
        clrtext: "#b0aec1",
        clrfoam: "#908caa",
      },
      zIndex: {
        "-1": "-1",
      },
      keyframes: {
        fadeIn: {
          "0%, 80%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.3s ease-in-out ",
      },
    },
  },
  plugins: [],
};
export default config;
