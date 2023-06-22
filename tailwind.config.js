/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'background-white': '#F0F0F3',
        'button-grey': '#CECECE',
        'shadow-grey': '#C0C0C0',
        'text-grey': '#A9A9A9',
        'purple': '#A6005A',
        'yellow': '#FFDC61',
        'red': '#FF2020',
        'green': '#3BE300',
        'blue': '#4356FF',
      },
      boxShadow: {
        'inner': 'inset -3px -3px 5px #FFFFFF, inset 3px 3px 5px #CDCDCD',
        'outer': '-5px -5px 10px #FFFFFF, 5px 5px 10px #CDCDCD',
      },
    },
    fontFamily: {
      header: ["Exo", "sans-serif"],
      normalText: ["Lexend", "sans-serif"]
    },
  },
  plugins: [],
}
