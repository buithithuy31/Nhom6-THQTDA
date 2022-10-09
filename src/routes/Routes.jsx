import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

import ContactPage from '../pages/Contact'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/Register'
import Search from '../components/Search'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/search' component={Search} />
        </Switch>
    )
}

export default Routes
