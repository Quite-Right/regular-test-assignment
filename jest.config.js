/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions: { paths } } = require('./tsconfig.json');

const fileImports = ['@svg/*'];

const isFileImport = (key) => {
  return fileImports.includes(key);
};

const pathsToModuleNameMapper = (obj) => {
  const paths = {};
  for (const key in obj) {
    if (!isFileImport(key)) {
      const value = obj[key][0];
      const endsWithStar = key.endsWith('/*');
      const newKey = key.substring(0, endsWithStar ? key.length - 1 : key.length) + 
        (endsWithStar ? '(.+)$' : '');
      const newValue = `<rootDir>/src/${
        value.substring(0, endsWithStar ? value.length - 1 : value.length)
      }${endsWithStar ? '$1' : ''}`;
      paths[newKey] = newValue;
    }
  }
  return paths;
};

module.exports={
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  'testMatch': [
    '**/*.(test).(ts|tsx)'
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths),
    '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$':
    '<rootDir>/src/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts'
  ],
  'testEnvironment': 'jsdom',
};