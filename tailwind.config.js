import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      dark: "#414141",
      gray: "#A7A7A7",
    },
    backgroundColor: {
      "main-color": "#FFE031",
      white: "#F2F2F2",
    },
    backgroundImage: {
      "main-gradient":
        "linear-gradient(180deg, #FFFEFA 0%, #FFE031 0%, #FFFEFA 0.01%, #FCFCFC 100%)",
    },
    fontFamily: {
      roboto: ["var(--font-roboto)", ...fontFamily.sans],
    },
  },
};
export const plugins = [];
