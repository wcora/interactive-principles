import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
    return (
        <button
            type={'button'}
            className={'btn btn-link'}
            onClick={props.onClick}>
            <i className={'fas fa-' + props.icon + ' ' + (props.reverseIconPlacement ? 'pull-right' : 'pull-left')}></i>
            {props.text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.any,
    onClick: PropTypes.any,
    icon: PropTypes.any,
    reverseIconPlacement: PropTypes.any
};

export default Button;