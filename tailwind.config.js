module.exports = {
  purge: {
    enabled: false,
    content: ['src/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': '#F89283',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
