import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      width: {
        Wform: '320px',
      },
      height: {
        skeleton: '860px',
      },
      maxWidth: {
        largeDesktop: '1600px',
        largeProductValue: '280px',
      },
      maxHeight: {
        HomeProduct: '860px',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}
export default config
