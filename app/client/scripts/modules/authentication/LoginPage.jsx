import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LoginForm from 'lib/form/auth/LoginForm';
import LoginFormContainer from 'lib/form/auth/LoginFormContainer';

import store from 'lib/redux/store';
import {login} from 'lib/redux/customer/loginActions';

// Redirect after login
// https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        // this.state = {user: {email: null, password: null}};

        // this.submitLogin = this.submitLogin.bind(this);
    }

    componentDidMount() {
        console.log('LoginPage: ', this.props);
    }

    // submitLogin() {
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let request = new Request('/api/login', {
    //         method: 'POST',
    //         headers: headers,
    //         body: JSON.stringify(this.state.user),
    //         credentials: 'include'
    //     });

    //     // fetch(request)
    //     //     .then((response) => response.json())
    //     //     .then(data => {
    //     //         // TODO this may need to optionally redirect to the checkout
    //     //         this.props.history.push('/account/dashboard');
    //     //     }).catch(err => {
    //     //         console.log('err ', err);
    //     //     })
    //     // console.log(this.state.user);
    //     // console.log(login);

    //     store.subscribe(() => {
    //         console.log(store.getState());
    //     });

    //     // store.dispatch(login(this.state.user));
    // }

    render() {
        // <LoginForm user={this.state.user} parentSubmit={this.submitLogin} />
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