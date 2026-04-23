import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-gold': '#8F8159',
        'brand-black': '#000000',
        'brand-charcoal': '#1A1A1A',
        'brand-light': '#FFFFFF',
      },
      fontFamily: {
        norwester: ['Norwester', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
