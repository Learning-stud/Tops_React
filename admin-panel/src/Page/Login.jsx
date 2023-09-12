import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();

        let valid = true;
        const newErrors = {
            username: '',
            password: '',
        };

        if (username.trim() === '') {
            newErrors.username = 'Username is required';
            valid = false;
        }

        if (password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        window.location.href = '/Dashboard';
    };

    return (
        <div>
            <div className="container">
                <div className="row text-center " style={{ paddingTop: 100 }}>
                    <div className="col-md-12">
                        <img src="assets/img/logo-invoice.png" alt="Logo" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form">
                                <hr />
                                <h5>Enter Details to Login</h5>
                                <br />
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    {errors.username && <div className="text-danger">{errors.username}</div>}
                                </div>
                                <div className="form-group input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Your Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" /> Remember me
                                    </label>
                                    <span className="pull-right">
                                        <a href="index.html">Forget password ?</a>
                                    </span>
                                </div>
                                <NavLink to='/Dashboard' onClick={handleLogin} className="btn btn-primary">Login Now</NavLink>
                                <hr />
                                Not registered? <a href="index.html">Click here</a> or go to <a href="index.html">Home</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
