const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: true,
      stage: 1,
    }),
  ],
};
