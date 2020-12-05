module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/max-len': ['error', {
      'code': 80,
      'template': 80,
      'tabWidth': 2,
      'comments': 80,
      'ignorePattern': '',
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': false,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': false,
      'ignoreRegExpLiterals': false,
      'ignoreHTMLAttributeValues': true,
      'ignoreHTMLTextContents': true,
    }],
  },
};
