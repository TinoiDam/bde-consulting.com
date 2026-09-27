import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-slow-reverse': 'float-slow-reverse 10s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'breathe-1': 'breathe-1 25s ease-in-out infinite',
        'breathe-2': 'breathe-2 30s ease-in-out infinite',
        'breathe-3': 'breathe-3 22s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.05)' },
        },
        'float-slow-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
        },
        'breathe-1': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) translateX(4px) scale(1.02)' },
        },
        'breathe-2': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(6px) scale(0.98)' },
        },
        'breathe-3': {
          '0%, 100%': { transform: 'translateX(0px) scale(1)' },
          '50%': { transform: 'translateX(-5px) scale(1.01)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
