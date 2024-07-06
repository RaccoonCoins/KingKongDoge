/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  corePlugins: {
    container: false
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': '480px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        '2xl': '1440px',
        '3xl': '1470px',
      },
      colors: {
        "primary": "#8A01D7",
        "secondary": "#09070E",
        "bgClr": "#2C082E",
        "text": "#ABABAB",
      },
      boxShadow: {
        'shadow': '0px 0px 20px 0px rgba(0,0,0,0.15) inset',
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Dangrek': ['Dangrek', 'sans-serif'],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingInline: '15px',
          marginInline: 'auto',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
          '@screen 3xl': {
            maxWidth: '1470px',
          },
        }
      })
    }
  ],
}

