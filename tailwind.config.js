module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ["./src/**/*.{html,ts}"]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
