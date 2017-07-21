import React, {Component} from 'react';


export default class AccountLinks extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        console.log('logout here');
    }

    renderUsername() {
        if(this.props.customer) {
            //return this.props.customer.email;
            return (
                <ul>
                    <li><Link to="/account/dashboard">My Account</Link></li>
                    <li><Link to="/account/dashboard" onClick={this.handleLogout}>Logout</Link></li>
                </ul>
            );
        } else {
            return 'nobody';
        }
    }

    render() {
        return (
            <p>{this.renderUsername()}</p>
        )
    }
}