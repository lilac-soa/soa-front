import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
    fontFamily: {
      suit: ['var(--font-suit)'],
    },
    colors: {
      primary: {
        100: "#EEEFFC",
        200: "#A8ADF0",
        300: "#737BE7",
        400: "#626BE4",
        500: "#3F4ADE",
      },
      secondary: {
        100: "#EBFFFB",
        200: "#36FCDB",
        300: "#04F1CA",
        400: "#03DDB9",
        500: "#03BD9D",
      },
      error: {
        100: "#FDD8DD",
        200: "#F98A99",
        300: "#F75066",
        400: "#F63C55",
        500: "#F41131",
      },
      black: {
        100: "#FFFFFF",
        200: "#E0E0E0",
        300: "#CCCCCC",
        400: "#A3A3A3",
        500: "#333333",
        600: "#292929",
        700: "#1E1E1E"
      },
      overlay: {
        1: "#000000",
        2: ""
      },
      information: {
        100: "#EEEFFC",
        200: "#A8ADF0",
        300: "#737BE7",
        400: "#626BE4",
        500: "#3F4ADE",
      },
      highlight: "#FF2B6"
    }
  },
  plugins: [],
};
export default config;
