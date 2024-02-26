/** @type {import('tailwindcss').Config} */

// import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.tsx',
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        srl: 'minmax(18rem, 20rem) 1fr ',
      },

      fontSize: {
        custom: '24px',
      },
      lineHeight: {
        custom: '40px',
      },

      colors: {
        'base-bg-light': '#F2F2F2',
        'base-font-light-50': '#F9F9F9',
        'base-brand-primary-600': '#672F93',
        'base-global-blue-600': '#0053A1',
        'base-global-blue-700': '#0083C9',
        'base-font-dark-800': '#1D1D1D',
        'base-font-warning-500': '#6F6F6F',
        'base-button': '#E6E5E5',
        'base-bg-bg': '#f4f4f4',

        'base-bg-dark-800': '#000000',
        'base-text-dark-800': '#FFFFFF',
      },

      width: {
        widthservtwo: '494px',
        wserviceone: '1280px',
      },

      maxHeight: {
        heightservtwo: '730px',
        hserviceone: '794px',
      },

      fontFamily: {
        proximaNova: ['Proxima Nova', 'sans-serif'],
      },

      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        blink: 'blink 2s infinite',
      },
    },
  },
  plugins: [],
}
