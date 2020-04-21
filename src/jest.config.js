module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        '<rootDir>/src/**/*.js',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageThreshold: {
        './src/Component': {
            // We should thrive for 100% coverage on components only.
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    moduleNameMapper: {
        '\\.(css|scss|sass|jpg|png|svg)$': 'identity-obj-proxy',
    },
    modulePathIgnorePatterns: [
        '<rootDir>/src/setupTests.js',
    ],
    setupFiles: ['<rootDir>/src/setupTests.js'],
    verbose: true,
};
