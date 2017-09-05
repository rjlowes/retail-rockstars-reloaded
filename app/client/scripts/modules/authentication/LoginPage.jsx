import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginFormContainer from 'modules/authentication/partials/LoginFormContainer';

// import store from 'lib/redux/store';
import {login} from 'lib/redux/customer/loginActions';

// Redirect after login
// https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764

@connect((store) => {
    return {
        customer: store.authentication.customer
    };
})
export default class LoginPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.customer) {
            this.props.history.push('/account/dashboard');
        }
    }

    render() {
        return (
            <div className="t-login">
                <div className="t-login__primary-row">
                    <div className="t-login-main">
                        <div>
                            <h1>Sign in</h1>
                            <p><Link to="/register" className="logo">Create an account</Link> or sign in to continue.</p>
                        </div>
                        <LoginFormContainer />
                    </div>
                    <div className="t-login-sidebar">
                        <p>Test content</p>
                    </div>
                </div>
            </div>
        );
    }
}