const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias} = require('customize-cra');
const path = require("path");

module.exports = function override(config, env) {
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    //使用less-loader对源码重的less的变量进行设置antd自定义主题
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": '#64BFBB'
        }
    }),
    //增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);