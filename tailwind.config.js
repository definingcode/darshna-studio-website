/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: 'var(--gold)',
        navy: 'var(--navy)',
        ink: 'var(--ink)',
        mid: 'var(--mid)',
        soft: 'var(--soft)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}