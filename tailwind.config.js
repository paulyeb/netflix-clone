/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      backgroundImage: {
        hero: "url('../public/images/buildings/house-1.jpg')",
        men_site_plan: "url('../public/images/site/constructors-site-plan.jpg')",
      }
    },
  },
  plugins: [],
}
