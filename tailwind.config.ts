import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coal: '#0a0a0a',
        ash: '#262626',
        blood: '#7f1d1d',
      },
      fontFamily: {
        serif: ['var(--font-crimson)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
