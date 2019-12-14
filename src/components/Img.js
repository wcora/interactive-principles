import PropTypes from 'prop-types';
import React from 'react';

function Img(props) {
    var image = require('../images/illustrations/' + (props.id) + '.svg');
    return (
        <div style={{backgroundImage: 'url(' + image + ')'}} className={'principle-image ' + props.classes}></div>
    );
}

Img.propTypes = {
    id: PropTypes.any,
    classes: PropTypes.any
};

export default Img;
