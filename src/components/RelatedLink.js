import PropTypes from 'prop-types';
import React from 'react';
import principles from '../principles.json';

function RelatedLink(props) {
    //get name of principle
    let title = principles.filter(function(item) { return item.id == props.id; })[0].principle;

    return (
        <a className={'link'} onClick={props.onOpen}>{title}</a>
    );
}

RelatedLink.propTypes = {
    id: PropTypes.any,
    classes: PropTypes.any,
    onOpen: PropTypes.any
};

export default RelatedLink;
