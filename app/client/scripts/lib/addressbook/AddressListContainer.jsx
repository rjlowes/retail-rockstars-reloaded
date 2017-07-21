import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import AddressList from 'lib/addressbook/AddressList';

import store from 'lib/redux/store';
import {connect} from 'react-redux';

import {fetchAddressList} from 'lib/redux/addressbook/fetchAddressListActions';

// @connect((store) => {
//     return {
//         addressbook: store.addresses.addressbook
//     };
// })
export default class AddressListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {addresses: []};
    }

    componentDidMount() {
        let dummyAddresses = [{
            title: 'Mr',
            firstname: 'John',
            lastname: 'Smith',
            address1: '1 Crendon Street',
            address2: '',
            address3: '',
            townCity: 'High Wycombe',
            county: 'Bucks',
            country: 'United Kingdom',
            postcode: 'TE456ST',
            telephone: '07788666555'
        }];
        
        //this.setState({addresses: dummyAddresses});
        store.dispatch(fetchAddressList());
    }

    render() {

        console.log(store.getState());

        console.log('rending....');
        console.log(this.props.addressbook);

        return (
            <AddressList addresses={this.state.addresses} />
        )
    }
}