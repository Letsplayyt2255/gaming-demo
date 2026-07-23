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
          50: '#e6fff8',
          100: '#b3ffea',
          200: '#80ffdc',
          300: '#4dffcE',
          400: '#1affc9',
          500: '#00e6b3',
          600: '#00b389',
          700: '#008062',
          800: '#004d3b',
          900: '#001a14',
        },
        volt: {
          400: '#a3ff3c',
          500: '#7dff00',
          600: '#5fbf00',
        },
        magenta: {
          400: '#ff3ca3',
          500: '#e6007a',
          600: '#b3005e',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 230, 179, 0.35), 0 0 40px rgba(0, 230, 179, 0.15)',
        'neon-sm': '0 0 12px rgba(0, 230, 179, 0.3)',
        volt: '0 0 20px rgba(125, 255, 0, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
