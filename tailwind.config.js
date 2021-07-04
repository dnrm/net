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
          DEFAULT: "#FFFFFF",
        },
        detail: {
          DEFAULT: "#008C8C"
        },
        title: {
          DEFAULT: "#000000"
        },
        body: {
          DEFAULT: "#242424"
        }
      },
      fontFamily: {
        'lora' : ['Lora', 'serif']
      }
    },
  },
  variants: {},
  plugins: [],
};
