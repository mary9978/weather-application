/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme';
export default {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
      },
      fontFamily:{
        "iranSans":["IRANSans",...fontFamily.sans]
      },
      colors: {
         "primary-1":`var(--color-primary-1)`,
         "primary-2":`var(--color-primary-2)`,
         "darkest":`var(--color-darkest)`,
         "dark":`var( --color-dark)`,
         "medium":`var(--color-medium)`,
         "light":`var(--color-light)`,
         "lightest":`var(--color-lightest)`,
         "white":`var(--color-white)`,
         "success":`var(--color-success)`,
         "error":`var(--color-error)`,
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
}

