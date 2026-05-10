/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Times New Roman', 'serif'],
        'mono-dm': ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}