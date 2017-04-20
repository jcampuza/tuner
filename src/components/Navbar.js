import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
        <header>
            <nav className="Navbar">
                <ul>
                    <li><Link className="Navbar__link" to="/home">Home</Link></li>
                    <li><Link className="Navbar__link" to="/about">About</Link></li>
                    <li className="Navbar__link--right"><Link className="Navbar__link" to="/">Splash Again!</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Navbar;