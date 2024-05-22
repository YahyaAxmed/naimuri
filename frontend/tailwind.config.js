/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              "gray-100": "var(--gray-100)",
              primarymain: "var(--primarymain)",
          },
          fontFamily: {
              "body-text-inter-14-medium": "var(--body-text-inter-14-medium-font-family)",
          },
      },
  },
  plugins: [],
};
