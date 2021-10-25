module.exports = {
  prepare: (scss) =>
    scss.replace(/@import "..\/..\/sass/g, `@import "src/sass`),
};
