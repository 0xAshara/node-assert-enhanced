module.exports = {
  root: true,
  extends: 'standard',
  plugins: [
    'standard',
    'jest'
  ],
  rules: {
    'quote-props': [2, 'consistent'],
    'semi': [2, 'always'],
    'prefer-regex-literals': 0
  },
  env: {
    node: true,
    jest: true
  },
  globals: {
    __root: true,
    __tmp: true
  }
};
