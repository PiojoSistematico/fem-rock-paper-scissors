/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "scissors-1": "#ec9e0e",
        "scissors-2": "#eca922",
        "paper-1": "#4865f4",
        "paper-2": "#5671f5",
        "rock-1": "#dc2e4e",
        "rock-2": "#dd405d",
        "lizard-1": "#834fe3",
        "lizard-2": "#8c5de5",
        "cyan-1": "#40b9ce",
        "cyan-2": "#52bed1",
        "dark-text": "#3b4363",
        "score-text": "#2a46c0",
        "header-text": "#606e85",
        "radial-1": "#1f3756",
        "radial-2": "#141539",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
