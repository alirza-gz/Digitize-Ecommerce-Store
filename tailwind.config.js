/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
      animation: {
        openmenu: "openmenu 0.25s ease-in-out",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { bottom: "-150px" },
          // final position
          "100%": { bottom: "0px" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
