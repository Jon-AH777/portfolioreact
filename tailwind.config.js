/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        text: "linear-gradient(270deg, #e0c3fc  10%, #4a90e2 100%)",
        button: "linear-gradient(264deg, #00c9ff -5.09%, #92fe9d 106.28%)",
      },
      colors: {
        resume: "#00c9ff",
        text: "#D8D8D8",

        footerColor: "a0a0a0",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
