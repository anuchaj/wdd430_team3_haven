/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D4C41",   // Rich Brown
        secondary: "#D4A373", // Warm Sand
        accent: "#FFB703",    // Golden Amber
        light: "#F8F5F0",     // Off-White
        dark: "#333333",      // Charcoal
        
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
