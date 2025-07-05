import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2F3E46',
        accent: '#CAD2C5',
        background: '#F8F9FA',
      }
    },
  },
  plugins: [],
}
export default config
