/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)'
      },
      colors:{
        rocketseat: '#8257e6',    

        gray900: '#121214',
        gray800: '#202024',
        gray500: '#202024',
        gray300: '#c4c4cc',
        gray100: '#e1e1e6',

        green500: '#00875f',
        green300: '#00b37e', 
      },
      fontSize: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1,5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}
