/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1dbf73',
        secondary: '#0e0e0f',
        light: '#f5f5f5',
        dark: '#222222',
      }
    },
  },
  plugins: [],
}

