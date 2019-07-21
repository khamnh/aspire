import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const svgss = require('../../assests/aspire-green.svg');
const Login = ({ history }) => {
    const [loginStates, setLoginState] = useState({ username: '', password: '' });
    const handleChangeUsername = (event) => {
        setLoginState({ ...loginStates, username: event.target.value });
    }
    const handleChangePassword = (event) => {
        setLoginState({ ...loginStates, password: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (loginStates.username === 'admin' && loginStates.password === '123456') {
            history.push('/dashboard');
        }
        else {
            alert('Login failed!');
        }
    }
    return (
        <div className="login-page">
            <form className="login" onSubmit={handleSubmit} >
                <img src={svgss} />
                <div className="user-input">
                    <div className="username">
                        <div className="pre-user-ico">
                            <span className="username-ico" />
                        </div>
                        <input
                            placeholder="Username"
                            type="text"
                            name="username"
                            id="usernameId"
                            onChange={handleChangeUsername}
                            value={loginStates.username}
                        />
                    </div>
                    <div className="password">
                        <div className="pre-pwd-ico">
                            <span className="pwd-ico" />
                        </div>
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="passwordId"
                            onChange={handleChangePassword}
                            value={loginStates.password}
                        />
                    </div>
                </div>
                <div className="remember-me">
                    <input type="checkbox" name="rememberme" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <div className="group-btn-login">
                    <button className="btn-login">Login</button>
                    <button type="button" className="btn-signup">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);
