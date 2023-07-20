/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { // font-
      'rubik': ['Rubik', 'sans-serif']
    },
    fontWeight: { // font-
      regular: 400,
      medium: 500,
      bold: 700
    },
    fontSize: { // text-
      regular: ['1rem', '28px'],
      header: '2.5rem',
      chat: ['0.5rem', '11px'],
      chat_accent: ['0.688rem', '11px'],
      chat_header: '0.688rem',
      chat_input: '0.563rem'
    },
    colors: {
      transparent: 'transparent',
      background: '#FAFAFA',
      white: '#FFF',
      text: '#A39DA9',
      header: '#3E2753',
      chat: {
        100: '#EEE5F4',
        200: '#D99EFF',
        300: '#9341C8',
        400: '#6E5D7E'
      },
      chat_background: '#F5F3F7',
      chat_border: 'rgba(62, 39, 83, 0.05)'
    },
    backgroundImage: {
      gradient_brand: 'linear-gradient(225deg, #E844FF 0%, #8739FF 100%)',
      gradient_brand_rev: 'linear-gradient(-225deg, #E844FF 0%, #8739FF 100%)'
    },
    boxShadow: {
      phone_shadow: '0px 30px 60px -10px rgba(62, 39, 83, 0.25)',
      header_shadow: '0px 0px 13px 0px rgba(62, 39, 83, 0.25)',
      message_shadow: '0px 10px 5px -5px rgba(62, 39, 83, 0.05)'
    },
    extend: {
      keyframes: {
        showMsg: {
          '0%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        showMsg: 'showMsg 0.3s',
      }
    },
  },
  plugins: [],
}

