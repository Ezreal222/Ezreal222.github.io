/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0b14',
        surface: '#111220',
        border: '#1d1f2c',
        accent: '#a855f7',
        'accent-glow': 'rgba(168, 85, 247, 0.3)',
        teal: '#5eead4',
        'teal-glow': 'rgba(94, 234, 212, 0.25)',
        amber: '#fbbf24',
        'text-primary': '#f1f5f9',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'teal-glow': 'tealGlow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'drift-a': 'driftA 28s ease-in-out infinite',
        'drift-b': 'driftB 34s ease-in-out infinite',
        'drift-c': 'driftC 40s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px 3px rgba(168, 85, 247, 0.3)' },
          '50%': { boxShadow: '0 0 35px 8px rgba(168, 85, 247, 0.6)' },
        },
        tealGlow: {
          '0%, 100%': { boxShadow: '0 0 20px 4px rgba(94, 234, 212, 0.18)' },
          '50%': { boxShadow: '0 0 40px 10px rgba(94, 234, 212, 0.35)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        driftA: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(80px, -60px) scale(1.15)' },
        },
        driftB: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-70px, 50px) scale(0.9)' },
        },
        driftC: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(50px, 80px) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
