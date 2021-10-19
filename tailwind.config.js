module.exports = {
  purge: {
    enabled: process.env.TAILWIND_MODE === "build",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(21, 32, 43)",
        },
        detail: {
          DEFAULT: "#008C8C"
        },
        title: {
          DEFAULT: "#000000"
        },
        background: {
          DEFAULT: "rgb(21, 32, 43)"
        }
      },
    },
  },
  variants: {},
  plugins: [],
};
