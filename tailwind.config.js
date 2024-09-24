/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgrond: {
          100: '#121212',
          200: '#1E1E1E',
          300: '#1F2933 ',
          500: '#2D3748 '
        },
        text: {
          primary: '#FFFFFF ',
          secondary: '#F3F4F6 '
        }
      }
    }
  },
  plugins: []
}
