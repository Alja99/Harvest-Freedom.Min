/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#A71119',
        "secondery": "#D3040A",
        "third" : "#007521"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif',"Inknut Antiqua"],
      },
    },
  },
  plugins: [],
}

