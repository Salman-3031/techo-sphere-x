/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
        primary: '#0b57a5',
        secondary: '#ff8b35',
        lightpara: "#adb5bd",
        darkpara: "#212529",
        bgdark: '#020617',
        bglight: '#F3F4F6'
      },
         container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: '3rem'
        }
      }
    },
  },
  plugins: [],
   darkMode: "class"
}

