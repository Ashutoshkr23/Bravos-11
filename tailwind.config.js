/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      dropShadow: {
        'blue': '0 -25px 40px rgba(186, 163, 251, 0.4)',
        'green': '0 -25px 40px rgba(92, 184, 228, 0.4)',
        'white': '0 15px 20px rgba(69, 110, 130, 0.25)',
        'button': '0 10px 10px rgba(69, 110, 130, 0.25)',
      },
      colors: {
        'dark': '#0c0c0f',
        'blue-1': '#5CB8E4',
        'white-1': '#f5f5fa',
        'blue-2': 'rgba(92, 184, 228, .4)',
      }
},
  },
  plugins: [
  ],
}
