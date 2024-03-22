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
        minSkeleton: '354px',
        midSkeleton: '386px',
        largeSkeleton: '530px',
        XlargeSkeleton: '860px',
      },
      maxWidth: {
        largeDesktop: '1600px',
        largeProductValue: '280px',
        minMaxPoductValue: '200px',
      },
      maxHeight: {
        HomeProduct: '860px',
        MidHomeProduct: '600px',
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}
export default config
