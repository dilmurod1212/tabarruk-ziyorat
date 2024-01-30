/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
      screens: ['1200px']
    },
    extend: {
      backgroundImage: {
        'sun': "url('/images/sun.png')",
      },
      colors: {
        dark: {
          DEFAULT: "#07091C",
          20: 'rgba(7, 9, 28, 0.40)',
          50: 'rgba(255, 255, 255, 0.04)',
          100: '#2C2E3E',
          150: "rgb(17, 19, 37)",
          200: "rgb(7, 9, 28)",
          250: "rgb(27, 29, 46)"
        },
        gray: {
          DEFAULT: "#202233",
          20: "rgba(255, 255, 255, 0.20)",
          50: "rgba(255, 255, 255, 0.4)",
          100: "#969696",
          200: "rgb(45, 46, 62)",
          250: "rgba(255, 255, 255, 0.60)",
          300: "rgba(255, 255, 255, 0.10)",
          350: 'rgba(255, 255, 255, 0.12)'
          // 200: "rgba(255, 255, 255, 0.60)", // there is another easier way to define this color, white/60, white/[0.04]
          // 300: 'rgba(255, 255, 255, 0.04)',
        },
        red: {
          DEFAULT: "#E54545",

        }
      },
      fontFamily:{
        gilroy: 'Gilroy',
        montserrat: 'Montserrat',
      },
      fontSize:{
        40: "40px",
        80: "80px",

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

