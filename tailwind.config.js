/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1B1F',
        surface: '#2D2E35',
        pinkAccent: '#F472B6',
        pinkSoft: '#F9A8D4',
        lavender: '#C084FC',
        textPrimary: '#FDF2F8',
        textMuted: '#D4D4D8',
      },
    },
  },
  plugins: [],
}
