/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        }
      },
      boxShadow: {
        glow: '0 10px 40px rgba(99, 102, 241, 0.25)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 45%), radial-gradient(circle at top left, rgba(14, 165, 233, 0.2), transparent 35%)'
      }
    }
  },
  plugins: []
};
