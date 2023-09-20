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
        orange: '#E9AB53',
        red: '#F15E50',
        gray: {
          '100': '#00001A',
          '200': '#5D5F79',
          '300': '#C5C6CE',
          '400': '#FFFDFA',
        }
      }
    },
  },
  plugins: [],
}
export default config
