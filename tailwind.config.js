/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files where Tailwind classes might be used
  ],
  theme: {
    extend: {}, // Customize the theme here
  },
  plugins: [],
};
