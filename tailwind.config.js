/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Include Next.js pages
    './components/**/*.{js,ts,jsx,tsx}',   // Include Next.js components
    './app/**/*.{js,ts,jsx,tsx}',     // If using Next.js `app` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
