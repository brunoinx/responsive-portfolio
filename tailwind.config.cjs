/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        background: '#000300',
      },
      backgroundImage: {
        banner: 'url(src/assets/img/banner-bg.png)',
      },
    },
  },
  plugins: [],
};
