module.exports = {
    presets: [
        ["@babel/preset-env", {}]
    ],
    plugins: [[
        "@babel/plugin-transform-runtime",
        {
            "corejs": { "version": 3 }
        }
    ], ["import", {
        "libraryName": "@tencent/tip-component",
        "libraryDirectory": "lib"
    }]]
}