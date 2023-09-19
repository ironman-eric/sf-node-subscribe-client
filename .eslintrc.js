module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['google', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['src/**/*.js', '*.proto'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {},
};
