import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarList from './NavbarList';
import '../Navbar.css';

class Navbar extends Component {

    static propTypes = {
        routes: PropTypes.array
    }

    static defaultProps = {
        routes: []
    }

    get activeLink() {
        return window.location.pathname;
    }

    render() {
        return (
            <header className="Navbar__container">
                <nav className="Navbar">
                    <NavbarList activeLink={this.activeLink} links={this.props.routes}></NavbarList>
                </nav>
            </header>
        );
    }
}

export default Navbar;