import React from 'react';
import PropTypes from 'prop-types';

import NavbarLink from './NavbarLink';

NavbarList.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        href: PropTypes.string
    })),
    activeLink: PropTypes.string
}

NavbarList.defaultProps = {
    links: [],
    activeLink: ''
}

function NavbarList({ links, activeLink }) {
    const navList = links.map((link, idx) => {
        const isActive = link.href.indexOf(activeLink) > -1;
        return <NavbarLink key={idx} active={isActive} title={link.title} href={link.href}></NavbarLink>
    });

    return navList.length ? <ul>{navList}</ul> : <none />
}

export default NavbarList;