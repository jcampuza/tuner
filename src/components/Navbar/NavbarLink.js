import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

NavbarLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    active: PropTypes.bool
}

NavbarLink.defaultProps = {
    active: false
}

function NavbarLink({ title, href, active }) {
    const listElementClass = active ? 'active' : ''
    
    return (
        <li className={listElementClass}>
            <NavLink 
                className="Navbar__link" 
                to={href}
            >
                {title}
            </NavLink>
        </li>
    )
}

export default NavbarLink;