/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#0f766e',
        cardBg: '#ffffff',
        headerBg: '#f8f8f8',
      },
    },
  },
  plugins: [],
};

