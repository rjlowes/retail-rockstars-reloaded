import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

@connect((store) => {
    return {
        isAuthenticated: store.authentication.customer
    };
})
export default class Toolbar extends Component {
    render() {
        return (
            <ul className="list-linear list-linear--align-right">
                {!this.props.isAuthenticated &&
                    <li><Link to="/login">Login</Link></li>}
                {!this.props.isAuthenticated &&
                    <li><Link to="/register">Register</Link></li>}
                {this.props.isAuthenticated &&
                    <li><Link to="/login">My Account</Link></li>}
                {this.props.isAuthenticated &&
                    <li><Link to="/login">Logout</Link></li>}
            </ul>
        );
    }
}