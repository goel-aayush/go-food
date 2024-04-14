/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [

  ],
}

