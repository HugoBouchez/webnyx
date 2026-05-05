import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          dark: '#142847',
        },
        accent: {
          DEFAULT: '#2D5F8A',
          dark: '#1E3A5F',
        },
        dark: {
          DEFAULT: '#0F0F0F',
          light: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

