import React, {Component,lazy,Suspense} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Admin from "./pages/admin/admin";
import Layout from "./pages/Layout";

/*
    Lazyload:
        0. 引入import {lazy,Suspense} from 'react';
        1. 通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
        2. 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
 */
const Login = lazy(()=>import('@/pages/login/login'))


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<h1>loading.....</h1>}>
                        {/*注册路由*/}
                        {/*switch组件可以让路由匹配以后不再继续向下匹配,提高性能*/}
                        <Switch>
                            <Route path='/login' component={Login}/>
                            {/* 路径/admin改为/可以节省路径中的admin */}
                            <Route path='/admin' component={Admin}/>
                        </Switch>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        );
    }
}