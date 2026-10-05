/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B132B',
          950: '#070A17',
        },
        gold: {
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
        }
      },
    },
  },
  plugins: [],
}
