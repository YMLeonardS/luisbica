/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-coffee": "url('/P.jpg')",
      },
      colors: {
        primary: "#32bcad",
        second: "#ec00b1",
        dark: "#1b182e",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster Two", "sans-serif"],
      },
    },
  },
  plugins: [],
};
