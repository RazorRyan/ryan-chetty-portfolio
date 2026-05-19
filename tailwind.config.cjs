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
        },
        neon: {
          cyan: '#00f5ff',
          magenta: '#ff2d78',
          green: '#39ff14',
          yellow: '#ffd700',
          purple: '#bf5fff',
          orange: '#ff6b35'
        },
        arcade: {
          black: '#040410',
          dark: '#080818',
          panel: '#0d0d2e',
          border: '#1a1a5e',
          mid: '#14145a'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace']
      },
      boxShadow: {
        glow: '0 10px 40px rgba(99, 102, 241, 0.25)',
        'neon-cyan': '0 0 8px #00f5ff, 0 0 20px rgba(0,245,255,0.3)',
        'neon-magenta': '0 0 8px #ff2d78, 0 0 20px rgba(255,45,120,0.3)',
        'neon-yellow': '0 0 8px #ffd700, 0 0 20px rgba(255,215,0,0.3)',
        'neon-green': '0 0 8px #39ff14, 0 0 20px rgba(57,255,20,0.3)',
        pixel: '4px 4px 0 rgba(0,0,0,0.5)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top right, rgba(99, 102, 241, 0.25), transparent 45%), radial-gradient(circle at top left, rgba(14, 165, 233, 0.2), transparent 35%)',
        'arcade-grid':
          'linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)',
        'arcade-radial':
          'radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.1) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(191,95,255,0.07) 0%, transparent 60%)'
      },
      backgroundSize: {
        grid: '40px 40px'
      },
      animation: {
        blink: 'blink 1.2s step-end infinite',
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'glow-pulse': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.25)' }
        }
      }
    }
  },
  plugins: []
};
