// tailwind.config.js

module.exports = {
  content: [
    "./App.tsx",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#804CDB",
        font: "#505050",
      },
    },
  },
  plugins: [],
};
