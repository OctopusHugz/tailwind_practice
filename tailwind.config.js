module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pic": "url('/img/consulting.jpg')",
      }),
      colors: {
        primary: "#FF9A49",
        secondary: "#FF6347",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
