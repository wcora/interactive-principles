import React from 'react';
import './Menu.scss';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Principles from '../Principles';
import About from '../About/About';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    onSetSidebarOpen() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    closeSidebar() {
        this.setState({
            sidebarOpen: false
        });
        // console.log('closed');
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClick(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                sidebarOpen: false
            });
        }
    }

    render(){

        return(
            <Router>
                <nav ref={this.setWrapperRef} className="side">
                    <input type="checkbox" checked={this.state.sidebarOpen} onChange={this.onSetSidebarOpen} className="side-open" name="side-open" id="side-open"/>
                    <label className="side-open-button" htmlFor="side-open">
                        <span className="hamburger hamburger-1"></span>
                        <span className="hamburger hamburger-2"></span>
                        <span className="hamburger hamburger-3"></span>
                    </label>

                    <Link to={'/'} className={'side-item link sidebar__link'} onClick={this.closeSidebar}>
                        <b>All Principles</b>
                        <i className='fas fa-home'/>
                    </Link>

                    <Link to={'/about'} className={'side-item link sidebar__link'} onClick={this.closeSidebar}>
                        <b>About This Project</b>
                        <i className='fas fa-address-card'/>
                    </Link>
                    <a className="side-item" href={'https://ohlabcmu.wordpress.com/'} target={'_blank'} onClick={this.closeSidebar}>
                        <b>The OHLab at Carnegie Mellon</b>
                        <i className='fas fa-school'/>
                    </a>
                    <a className="side-item" href={'https://learnlab.org/'} target={'_blank'} onClick={this.closeSidebar}>
                        <b>The LearnLab at Carnegie Mellon</b>
                        <i className='fas fa-chalkboard-teacher'/>
                    </a>


                </nav>

                <Route exact path={'/'} component={Principles}/>
                <Route exact path={'/about'} component={About}/>
            </Router>

        );
    }
}

export default Menu;
