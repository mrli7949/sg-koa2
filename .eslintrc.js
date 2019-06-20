module.exports = {
    env: {
        'node': true
    },
    root: true,
    parserOptions: {
        ecmaVersion: 8, //指定ECMAScript支持的版本，6为ES6，这里为了兼容async和await，设置为8
        sourceType: 'module'
    },
    plugins: [
        'typescript'
    ],
    extends: ["koa", "standard"],
    rules: {
        "semi": 0
    }
};