import PropTypes from 'prop-types';
import React from 'react';

function Link(props) {
    return (
        <a href={props.url} className={'link ' + props.classes} target={props.target}>{props.text}</a>
    );
}

Link.propTypes = {
    classes: PropTypes.any,
    url: PropTypes.any,
    text: PropTypes.any,
    target: PropTypes.any
};

export default Link;