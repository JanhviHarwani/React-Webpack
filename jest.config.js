/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
        '\\.(css|less|sass|scss)$': '<rootDir>/node_modules/identity-obj-proxy',
    },
}
