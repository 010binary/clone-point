/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#B3D4FF99",
          DEFAULT: "#1A88E1",
          dark: "#1A88E1",
        },
      },
    },
  },
  plugins: [],
};

