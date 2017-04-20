import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Splash from './screens/Splash.js';
import Home from './screens/Home.js';

const Tune = () => {
  return (
    <div>
      <h1>Tune</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

const NavBar = () => {

}

export const Nav = () => {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Splash}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>

    </Router>
  )
}
