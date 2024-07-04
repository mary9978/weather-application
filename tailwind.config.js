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
        primary: `var(--color-primary)`,
         success: `var(--color-success)`,
         warning: `var(--color-warning)`,
         error: `var(--color-error)`
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.png')",
      }
    },
  },
  plugins: [],
}

