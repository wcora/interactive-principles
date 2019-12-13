import PropTypes from 'prop-types';
import React from 'react';
import Comparison from './Comparison';

function MultipleComparisons(props) {
    var examples = [];

    if(props.comparisons.match(/\n/)) {
        examples = props.comparisons.split(/\n/);
    } else {
        examples.push(props.comparisons);
    }

    return(
        <div className={'multiple-comparisons'}>
            {examples.map(example => (
                <Comparison key={example} comparison={example}/>
            ))}
        </div>
    );

}

MultipleComparisons.propTypes = {
    comparisons: PropTypes.any
};

export default MultipleComparisons;