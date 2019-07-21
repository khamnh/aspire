import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import Home from '../home';
import Contracts from '../contracts';
import HomeProvider from '../../contextAPI/homeprovider';
import Payment from '../payment'
const logoSvg = require('../../assests/aspire-green.svg');
const user = require('../../assests/user.png');

const Dashboard = ({ history, match }) => {
    return (
        <HomeProvider>
            <div className="dashboard">
                <div className="sidebar">
                    <div className="logo">
                        <img src={logoSvg} alt="no" />
                    </div>
                    <div className="user-profile">
                        <img src={user} width="180" alt="no" />
                        <div className="name">Kham Nguyen</div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="home-icon"><Link to={`${match.url}/home`}>Home</Link></li>
                            <li className="contract"><Link to={`${match.url}/contracts`}>Contracts</Link></li>
                            <li className="payment-history"><Link to={`${match.url}/history`}>Payment history</Link></li>
                            <li className="info"><Link to={`${match.url}/information`}>Information</Link></li>
                            <li className="change-password"><Link to={`${match.url}/change-password`}>Change password</Link></li>
                            <li className="logout"><Link to={`${match.url}/logout`}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="home">
                    <Switch>
                        <Route exact path={`${match.path}`} component={Home} />
                        <Route path={`${match.path}/home`} component={Home} />
                        <Route path={`${match.path}/contracts`} component={Contracts} />
                        <Route path={`${match.path}/history`} component={Payment} />
                        <Route path={`${match.path}/information`} />
                        <Route path={`${match.path}/change-password`} />
                        <Route path={`${match.path}/logout`} />
                    </Switch>
                </div>
            </div>
        </HomeProvider>
    )
}

export default withRouter(Dashboard);
