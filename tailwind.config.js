/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", //the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // All files in src directory and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D2042D', 
        secondary: '#FFFFFF',
        nav: '#b52031',
      },
    },
  },
  plugins: [],
}

