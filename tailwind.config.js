/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "login": "url('/assets/jeshoots-com-LtNvQHdKkmw-unsplash.jpg')"
      }
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}