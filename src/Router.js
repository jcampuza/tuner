import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Splash from './screens/Splash';
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar/index';

const routes = [
    {
        title: 'Home',
        href: '/home'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Splash',
        href: '/'
    }
]


export const Nav = () => {
    return (
        <Router>
            <div>
                <Navbar isOpen={true} routes={routes}></Navbar>

                <Route exact path="/" component={Splash}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </Router>
  )
}
