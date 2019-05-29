module.exports = {
  presets: [
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
  ],
  env: {
    coverage: {plugins: ['istanbul']}
  }
};
