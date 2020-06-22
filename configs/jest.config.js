const path = require('path');

const rootDir = path.join(__dirname, '../');
module.exports = {
  rootDir,
  verbose: true,
  transform: {},
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  modulePathIgnorePatterns: ['<rootDir>/configs'],
  restoreMocks: true,
  globals: {
    __path: rootDir,
  },
};
