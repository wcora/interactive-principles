import PropTypes from 'prop-types';
import React from 'react';

function GameExImage(props) {
    var image;
    try {image = require('../images/game_examples/' + (props.id) + '.png');}
    catch(e) {console.log(e);}
    return (
        image ? <div style={{backgroundImage: 'url(' + image + ')'}} className={'principle-image ' + props.classes}></div> : ''
    );
}

GameExImage.propTypes = {
    id: PropTypes.any,
    classes: PropTypes.any
};

export default GameExImage;
