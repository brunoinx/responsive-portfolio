/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        background: '#000300',
      },
      colors: {
        fuchsia: {
          750: '#AA367C',
        },
        indigo: {
          750: '#4A2FBD',
        },
      },
      backgroundImage: {
        banner: 'url(src/assets/img/banner-bg.png)',
        footer: 'url(src/assets/img/footer-bg.png)',
      },
      fontFamily: {
        centraRegular: ['Centra No2 Book', 'sans-serif'],
        centraMedium: ['Centra No2 Medium'],
        centraBold: ['Centra No2 Bold'],
      },
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        fadeInTop: {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        'updown-slow': 'updown 2s linear infinite alternate',
        'fade-in-top':
          'fadeInTop 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    },
  },
  plugins: [],
};
