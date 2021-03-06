module.exports = {
  extends: ['frost-standard'],
  globals: {
    capture: false
  },
  rules: {
    'mocha/no-mocha-arrows': 2,
    'mocha/valid-test-description': 2,
    'ocd/sort-import-declarations': [
      2,
      {
        localPrefixes: [
          '../',
          './',
          'ember-frost-navigation/'
        ]
      }
    ],
  }
}
