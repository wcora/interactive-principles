import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

class Tab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            label: this.props.label
        };
        this.onClick = this.onClick.bind(this);
    }


    onClick(){
        const { label, onClick } = this.props;
        console.log('label is:' + this.state.label);
        onClick(label);
    }

    render() {

        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={ className }
                onClick={ onClick }
            >
                <ReactSVG src={label}/>
            </li>
        );
    }
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Tab;
