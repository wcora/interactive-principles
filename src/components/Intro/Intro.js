import React from 'react';
import PropTypes from 'prop-types';
import intro from '../../intro.json';
import Tabs from '../Tabs/Tabs.js';
import Game from '../../images/systemIcon/game1.svg';
import Learn from '../../images/systemIcon/study1.svg';
import './Intro.scss';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            learn: [],
            game:[]
        };

    }

    componentDidMount() {
        this.setState({
            learn: intro[0].Category,
            game: intro[1].Category
        });
    }

    render() {
        const learns = this.state.learn.map((item) =>
            <li key={item.id}>
                <p>{item.cat}: </p>
                {item.detail}
            </li>
        );
        const games = this.state.game.map((item) =>
            <li key={item.id}>
                <p>{item.cat}: </p>
                {item.detail}
            </li>
        );

        return(

            <div className="popup">
                <div className="popup_inner">
                    {/*<div><span>Learning Science Principle Ideation</span></div>*/}
                    <button className="close" onClick={this.props.closePopup}>X</button>
                    <Tabs>
                        <div label={ Learn } >
                            <h2>{ intro[0].name } </h2>
                            <div className="left">
                                <div className="break"></div>
                                <div className="text">{ intro[0].Description } </div>
                            </div>
                            <div className="right">
                                <div className="text">
                                    <ul>
                                        {learns}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div label={ Game }>
                            <h2>{ intro[1].name } </h2>
                            <div className="left">
                                <div className="break"></div>
                                <div className="text">{ intro[1].Description } </div>
                            </div>
                            <div className="right">
                                <div className="text">
                                    <ul>
                                        {games}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Tabs>
                </div>
            </div>
        );
    }
}

Intro.propTypes = {
    closePopup: PropTypes.any,
};

export default Intro;
