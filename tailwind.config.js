/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: { 
        white0:'#f8f8ff',
        secondary:'#dedada',
        footer:'#191a1e',
      },
     backgroundImage: {
        'gradient-linear': 'linear-gradient(to bottom, #434343 0%, black 100%)',
      },
    },
  },
  plugins: [],
}