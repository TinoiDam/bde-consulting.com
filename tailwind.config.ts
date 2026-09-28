import type { Config } from 'tailwindcss';

// Tailwind v4 reads its theme from app/globals.css (@theme); colour tokens live there.
// This file only declares the content paths for tooling that still expects a config.
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
