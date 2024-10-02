/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkGray: 'var(--dark-gray)',
      black: 'var(--black)',
      white: 'var(--white)',
      veryDarkGray: 'var(--very-dark-gray)',
    },
    extend: {},
  },
  plugins: [],
};
