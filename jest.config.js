export default {
    "transform": {
        "^.+\\.tsx?$": "esbuild-jest"
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
