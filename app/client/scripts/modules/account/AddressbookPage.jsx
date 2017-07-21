import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import AddressListContainer from 'lib/addressbook/AddressListContainer';


export default class AddressbookPage extends Component {
    render() {
        return (
            <div>
                <Link to="/account/addressbook/new">new address</Link>
                <div className="">
                    <AddressListContainer />
                </div>
            </div>
        )
    }
}