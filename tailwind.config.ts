import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Use 'class' for manual control
  theme: {
    extend: {
      colors: {
        'custom-blue': '#dfdfdf', // Example custom color
        'custom-purple': '#101010', // Another custom color
        // Add as many custom colors as you need
      },
      fontSize: {
        'custom': '1em',
      },
      spacing: {
        '14vw': '14vw',
      },

      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}

export default config;
