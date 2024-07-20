/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#131319",
        darkA: "#27292D",
        gray: "#969696",
        darkGray: "#343434",
        mediumGray: "#6B6C70",
        white: "#FFFFFF",
        lightGray: "#C5C7CA",
        charcoal: "#35373B",
        silver: "#7F8084",
        blue: "#4A96FF",
        blueA: "#82B4FF",
      },
      spacing: {
        2.5: "0.625rem", // 10px
        3: "0.75rem", // 12px
        11.25: "2.8125rem", // 45px
      },
    },
  },
  plugins: [],
};
