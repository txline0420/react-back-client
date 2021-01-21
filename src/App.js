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