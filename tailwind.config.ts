import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#A4C528',
        'text': '#191A1A',
        's-text': '#555555CC',
        'box-bg': '#7C7C7C',
        "dark-gray": "#55555533",
        "white": "#ffff",
        "light-gray": "#55555533",
        "grey/01": "#555555",
      },
      boxShadow: {
        "2xl": "1px 5px 40px 8px #6E758812",
        "3xl": "1px 5px 40px 8px rgba(110, 117, 136, 0.07)",
        "buttonShadow": "0px 3px 3px 0px #55555540",
        "missionShadow": "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
