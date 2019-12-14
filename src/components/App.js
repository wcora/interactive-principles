import React, { Component } from 'react';
import logo from '../images/ixp_logo.svg';
import { HashRouter as Router, Link } from 'react-router-dom';
import Menu from './Menu/Menu';
// import Principles from './Principles';
// import menuicon from '../images/menuicon.svg';
// import About from './About/About';
// import Sidebar from 'react-sidebar';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return(
            <div>
                <Router>
                    <div className={'title-box'}>
                        <Link className={'main-logo'} to={'/'}>
                            <h1 className={'main-title'}>
                                <img src={logo} className={'img img-responsive'}/>
                            </h1>
                        </Link>
                        <h2 className={'main-subtitle'}>
                            a deck of learning science principles for designing educational games
                        </h2>
                    </div>

                    <Menu/>

                    {/*<Sidebar*/}
                    {/*    sidebar={*/}
                    {/*        <div>*/}
                    {/*            <Link to={'/'} className={'link sidebar__link'} onClick={() => this.onSetSidebarOpen(false)}>All Principles</Link>*/}
                    {/*            <Link to={'/about'} className={'link sidebar__link'} onClick={() => this.onSetSidebarOpen(false)}>About This Project</Link>*/}
                    {/*            <a href={'https://ohlabcmu.wordpress.com/'}*/}
                    {/*                className={'link sidebar__link'}*/}
                    {/*                target={'_blank'}*/}
                    {/*                onClick={() => this.onSetSidebarOpen(false)}>*/}
                    {/*                The OHLab at Carnegie Mellon*/}
                    {/*                <i className='fas fa-external-link-alt'/>*/}
                    {/*            </a>*/}
                    {/*            <a href={'https://learnlab.org/'}*/}
                    {/*                className={'link sidebar__link'}*/}
                    {/*                target={'_blank'}*/}
                    {/*                onClick={() => this.onSetSidebarOpen(false)}>*/}
                    {/*                The LearnLab at Carnegie Mellon*/}
                    {/*                <i className='fas fa-external-link-alt'/>*/}
                    {/*            </a>*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    rootClassName={'navigation'}*/}
                    {/*    open={this.state.sidebarOpen}*/}
                    {/*    onSetOpen={this.onSetSidebarOpen}*/}
                    {/*    sidebarClassName={'sidebar'}*/}
                    {/*    overlayClassName={'sidebar-overlay'}*/}
                    {/*    pullRight={true}*/}
                    {/*>*/}
                    {/*    <button id={'sidebar-button'} className={'btn btn-link'} onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}>*/}
                    {/*        <img src={menuicon}/>*/}
                    {/*        Menu*/}
                    {/*    </button>*/}
                    {/*</Sidebar>*/}

                    {/*<Route exact path={'/'} component={Principles}/>*/}
                    {/*<Route exact path={'/about'} component={About}/>*/}
                </Router>
            </div>
        );
    }
}
