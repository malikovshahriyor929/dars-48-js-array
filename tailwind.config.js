/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    fontFamily:{
      sans:"Abel"
    },
      colors:{
        surfaceimg: "#f6f6f6",
        secondary: "#a6331c",
        surface: "#fff",
        divider: "rgba(0, 0, 0, 0.12)",
        reds: "#cc0200",
        primaryhight1000: "#000",
        primarymedium600: "rgba(0, 0, 0, 0.6)",
        primarydisabled380: "rgba(0, 0, 0, 0.38)",
        primaryhover: "rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};