import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.tsx",
  "./src/*.{js,ts,jsx,tsx}",
  "./src/**/*.css",
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: {
        100: "#EBD7FE",
        200: "#D5B0FD",
        300: "#BA88F9",
        400: "#A269F4",
        500: "#7C3AED",
        600: "#5F2ACB",
        700: "#461DAA",
        800: "#301289",
        900: "#210B71",
      },
      success: {
        100: "#D9FBD3",
        200: "#ADF8A8",
        300: "#7AEB7E",
        400: "#56D867",
        500: "#26BF49",
        600: "#1BA448",
        700: "#138944",
        800: "#0C6E3F",
        900: "#075B3B",
      },
      info: {
        100: "#CBFDFB",
        200: "#97F7FB",
        300: "#63E4F4",
        400: "#3CCBEA",
        500: "#02A6DD",
        600: "#0181BE",
        700: "#01619F",
        800: "#004580",
        900: "#00316A",
      },
      warning: {
        100: "#FEFDD0",
        200: "#FDFAA1",
        300: "#FBF672",
        400: "#F8F04E",
        500: "#F4E916",
        600: "#D1C710",
        700: "#AFA50B",
        800: "#8D8407",
        900: "#756D04",
      },
      danger: {
        100: "#FFE7D2",
        200: "#FFC9A4",
        300: "#FFA478",
        400: "#FF8156",
        500: "#FF471E",
        600: "#DB2A15",
        700: "#B7140F",
        800: "#93090F",
        900: "#7A0513",
      },
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  plugin(function ({ addUtilities }) {
    const newUtilities = {
      ".gridView-1": {
        borderWidth: "8px",
        borderColor: "#FF471E",
      },
      ".gridView-2": {
        borderWidth: "8px",
        borderColor: "#F4E916",
      },
      ".gridView-3": {
        borderWidth: "8px",
        borderColor: "#26BF49",
      },
      ".gridView-4": {
        borderWidth: "8px",
        borderColor: "#02A6DD",
      },
    };
    addUtilities(newUtilities);
  }),
];
