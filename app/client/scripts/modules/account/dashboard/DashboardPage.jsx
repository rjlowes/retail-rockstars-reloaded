import React, {Component} from 'react';

import CustomerProfile from 'modules/account/dashboard/partials/CustomerProfile';


export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container dashboard">
                <header className="col-12 header-basic">
                    <h1>My Account</h1>
                </header>
                <div className="row">
                    <div className="col-md-4">
                        <CustomerProfile />
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2>My Orders</h2>
                            <div className="card__footer">
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h2>My Address Book</h2>
                            <div className="card__footer">
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}