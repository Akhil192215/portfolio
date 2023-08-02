/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      secondary:"#888888"
     }
    },
    fontFamily:{
      signature: ['Great Vibes'], 
    }
  },
  plugins: [],
}

