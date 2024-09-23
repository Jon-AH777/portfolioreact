/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
        text: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
        button: "linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)",
        text1: "linear-gradient(270deg, #DF8908 80%, #B415FF 100%)",
      },
      colors: {
        resume: "#B415FF",
        text: "#D8D8D8",
        bgContact: "#32323c",
        contactColor: "#A0A0A0",
        footerBg: "#32323B",
        footerColor: "a0a0a0",
      },
    },
  },
  plugins: [],
};
