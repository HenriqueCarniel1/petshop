/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interTight: ['Inter Tight', 'sans-serif'],
      },
      fontSize: {
        'title': ['24px', '32px'],
        'paragraph-medium': ['14px', '24px'],
        'paragraph-small': ['12px', '16px'],
        'label-large': ['16px', '24px'],
        'label-medium': ['14px', '24px'],
        'label-small': ['12px', '16px'],
        'link': ['12px', '16px'],
      },
      fontWeight: {
        'medium': 500,
        'bold': 700,
      },
      colors: {
        'content-primary': '#FFFFFF',
        'content-secondary': '#98959D',
        'content-tertiary': '#666666',
        'content-brand': '#9282FA',

        'background-primary': '#151515',
        'background-secondary': '#1E1E1E',
        'background-tertiary': '#23242C',
        'background-brand': '#9282FA',
        'background-highlights': '#BDB4FA',

        'border-primary': '#3E3C41',
        'border-secondary': '#86818C',
        'border-brand': '#9282FA',
        'border-divisor': '#353339',

        'accent-blue': '#027DF0',
        'accent-blue-light': '#16487A',
        'accent-yellow': '#F0DC02',
        'accent-yellow-light': '#756E1B',
        'accent-orange': '#F09102',
        'accent-orange-light': '#75501B',
      },
    },
  },
  plugins: [],
}
