module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/jestSetup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$':
      '<rootDir>/node_modules/react-native/Libraries/Image/RelativeImageStub',
  },
  collectCoverage: true,
};
