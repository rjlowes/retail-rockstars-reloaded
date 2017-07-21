import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LoginForm from 'lib/form/auth/LoginForm';

import store from 'lib/redux/store';
import {login} from 'lib/redux/customer/loginActions';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {user: {email: null, password: null}};

        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new Request('/api/login', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state.user),
            credentials: 'include'
        });

        // fetch(request)
        //     .then((response) => response.json())
        //     .then(data => {
        //         // TODO this may need to optionally redirect to the checkout
        //         this.props.history.push('/account/dashboard');
        //     }).catch(err => {
        //         console.log('err ', err);
        //     })
        // console.log(this.state.user);
        // console.log(login);

        store.subscribe(() => {
            console.log(store.getState());
        });

        store.dispatch(login(this.state.user));
    }

    render() {
        return (
            <div className="container">
                <LoginForm user={this.state.user} parentSubmit={this.submitLogin} />
            </div>
        );
    }
}