import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilterButton(props) {
    let title;

    if (props.cat === 1) {
        title = 'Memory/Fluency';
    } else if (props.cat === 2) {
        title = 'Induction/Refinement';
    } else {
        title = 'Sense-making/Understanding';
    }

    return(
        <h2 onClick={props.onPress} className={'category-filters__button category-filters__button--cat' + props.cat + ' ' + (props.active ? 'category-filters__button--active' : '')}>
            <i className={props.active ? 'fas fa-check-square' : 'far fa-square'}/>
            {title}
        </h2>
    );
}

CategoryFilterButton.propTypes= {
    cat: PropTypes.any,
    onPress: PropTypes.any,
    active: PropTypes.any
};

export default CategoryFilterButton;