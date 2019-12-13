import PropTypes from 'prop-types';
import React from 'react';

function Comparison(props) {
    var example1;
    var parts;
    var item1;
    var item2;
    var item3;

    example1 = (props.comparison.match(/\n/)) ? (props.comparison.split(/\n/)[0]) : props.comparison;

    if (example1.includes('>')) {
        //standard greater than comparison
        parts = example1.split('>');
        item1 = parts[0];
        item2 = parts[1];

        //has a third one
        if(parts[2]) {
            item3 = parts[2];
        }
    }

    if (item3) {
        return(
            <div className={'comparison row'}>
                <span className={'comparison__greater'}>
                    <i className={'fas fa-check'}/>
                    {item1}
                </span>
                <span className={'comparison__icon comparison__icon--greater'}></span>
                <span className={'comparison__less'}>
                    <i className={'fas fa-times'}/>
                    {item2}
                    <i className={'fas fa-times'}/>
                    {item3}
                </span>
            </div>
        );
    } else if (item1 && item2) {
        return(
            <div className={'comparison row'}>
                <span className={'comparison__greater'}>
                    <i className={'fas fa-check'}/>
                    {item1}
                </span>
                <span className={'comparison__icon comparison__icon--greater'}></span>
                <span className={'comparison__less'}>
                    <i className={'fas fa-times'}/>
                    {item2}
                </span>
            </div>
        );
    } else {
        return null;
    }
}

Comparison.propTypes = {
    comparison: PropTypes.any
};

export default Comparison;