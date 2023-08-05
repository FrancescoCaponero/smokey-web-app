/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proza': ['"Proza Libre"', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': '#B77729',
      'lil-dark': "#9f6823",
      'dark': '#1f1f21',
      'darkgrey': '#333333',
      'plate-white': '#e9e9e9',
      'plate-greyish': '#999',
      'yellow': '#FFC43A',
      'blue': '#253B80'
    },
  },
  plugins: [],
}

