/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0c14',
          800: '#11141f',
          700: '#1a1e2e',
          600: '#252a3d',
          500: '#3a4156',
        },
        neon: {
          50: '#e6fff8', 100: '#b3ffea', 200: '#80ffdc', 300: '#4dffce',
          400: '#1affc9', 500: '#00e6b3', 600: '#00b389', 700: '#008062', 800: '#004d3b', 900: '#001a14',
        },
        volt: { 400: '#a3ff3c', 500: '#7dff00', 600: '#5fbf00' },
        magenta: { 400: '#ff3ca3', 500: '#e6007a', 600: '#b3005e' },
        cyan: { 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2' },
        orange: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c' },
        blue: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb' },
        pink: { 400: '#f472b6', 500: '#ec4899', 600: '#db2777' },
        gold: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0,230,179,0.35), 0 0 40px rgba(0,230,179,0.15)',
        'neon-sm': '0 0 12px rgba(0,230,179,0.3)',
        volt: '0 0 20px rgba(125,255,0,0.35)',
        magenta: '0 0 20px rgba(255,60,163,0.35), 0 0 40px rgba(255,60,163,0.15)',
        cyan: '0 0 20px rgba(34,211,238,0.35), 0 0 40px rgba(34,211,238,0.15)',
        orange: '0 0 20px rgba(251,146,60,0.35), 0 0 40px rgba(251,146,60,0.15)',
        blue: '0 0 20px rgba(96,165,250,0.35), 0 0 40px rgba(96,165,250,0.15)',
        pink: '0 0 20px rgba(244,114,182,0.35), 0 0 40px rgba(244,114,182,0.15)',
        gold: '0 0 20px rgba(251,191,36,0.35), 0 0 40px rgba(251,191,36,0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'gradient-x': 'gradientX 5s ease infinite',
        'gradient-rotate': 'gradientRotate 6s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'tilt': 'tilt 8s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite',
        'pop': 'pop 0.3s ease-out',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseGlow: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100%)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        tilt: {
          '0%,100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        breathe: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        aurora: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
