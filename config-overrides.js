const {override,fixBabelImports} = require('customize-cra');

module.exports = override(
    //针对antd实现按需打包: 根据antd库中的
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        }),
);