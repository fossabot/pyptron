module.exports = {
  reporters: ['default', 'jest-junit'],
  moduleNameMapper: {
    '\\.(md)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
}
