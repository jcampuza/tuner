import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

Button.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.string,
    variant: PropTypes.string,
    className: PropTypes.string
}

Button.defaultProps = {
    className : '',
    color: 'default',
    disabled: false,
    size: 'default',
    variant: 'default'
}

function Button(props) {
    const btnClass = classNames({
        'btn': true,
        [`btn-${props.color}`]: props.color !== 'default',
        [`btn-${props.size}`]: props.size !== 'default',
        [`btn-${props.variant}`]: props.variant !== 'default'
    });

    return (
        <button
            className = {btnClass}
            onClick = {props.onPress}
        >
            {props.children}
        </button>
    )
}

export default Button;
