React-back-client
-----------------

### 1.项目初始化

  - react
  - react-router-dom
    ```
    npm i react-router-dom -g  && npm add react-router-dom
    ```
  - antd
    ```
    npm i antd -g && npm add antd
    ```
  - react-redux 

### 2.antd引入

- 下载依赖: 
  ```
  npm add react-app-rewired customize-cra babel-plugin-import
  ```
- 定义加载配置的js模块: config-overrides.js
  ```
  const {override,fixBabelImports} = require('customize-cra')
  
  module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        }),
);
  
- 使用:
  ```javascript
    import { Button } from 'antd';
    import 'antd/dist/antd.css';
  ```
- 修改package.json文件中的start、build、test命令
    ```
    "scripts": {
        "start": "react-app-rewired start", 
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    },
    ```
- 自定义antd主题
  * 安装所需依赖
    ```angular2html
    npm install react-app-rewired babel-plugin-import  --save-dev
    npm install less less-loader style-loader css-loader --save-dev
    ```
  * 在项目根目录下创建config-overrides.js文件，内容如下
        
    ```angular2html
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
            style: true
        }),
        //使用less-loader对源码重的less的变量进行设置antd自定义主题
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: {
                "@brand-primary": '#64BFBB'
            }
        }),
        //增加路径别名的处理
        addWebpackAlias({
            '@': path.resolve('./src')
        })
    );
    ```
    
### 3.react-router-dom引入
- 下载包
  ```
  npm i react-router-dom -g  && npm add react-router-dom
  ```
- 规划路由
  * 规划为login和admin
  * 在pages中分别创建路由组件
```angular2html
import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                Login ...
            </div>
        );
    }
}
```
```angular2html
import React, {Component} from 'react';

export default class Admin extends Component {
    render() {
        return (
            <div>
                Admin ...
            </div>
        );
    }
}
```
```angular2html
import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/*注册路由*/}
                {/*switch组件可以让路由匹配以后不再继续向下匹配,提高性能*/}
                <Switch>
                    <Route path='/login' component={Login}/>
                    {/* 路径/admin改为/可以节省路径中的admin */}
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
```

### 4.Login

