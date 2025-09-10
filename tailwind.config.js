module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        colors: "#ddb9fd",
        yellow: { 900: "#e58e1a" },
        purple: { 800: "#800080", 900: "#4c1363" },
        gray: { 900: "#5b1400" },
      },
      fontFamily: { manrope: "Manrope", lato: "Lato", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
