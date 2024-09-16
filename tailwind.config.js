/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(285deg, rgba(255, 0, 83, 0.95) -36.63%, rgba(0, 0, 0, 0.95) 68.16%)",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        "sora-bold": ["Sora-bold", "sans-serif"],
        "sora-black": ["Sora-black", "sans-serif"],
        "sora-extrabold": ["Sora-extrabold", "sans-serif"],
        "sora-extralight": ["Sora-extralight", "sans-serif"],
        "sora-light": ["Sora-light", "sans-serif"],
        "sora-medium": ["Sora-medium", "sans-serif"],
        "sora-regular": ["Sora-regular", "sans-serif"],
        "sora-semibold": ["Sora-semibold", "sans-serif"],
        "sora-thin": ["Sora-thin", "sans-serif"],
      },
      animation: {
        "pulse-custom": "pulse-custom 1.5s infinite",
      },
      keyframes: {
        "pulse-custom": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
