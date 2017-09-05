import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AddressList from 'lib/addressbook/AddressList';
import store from 'lib/redux/store';
import {connect} from 'react-redux';
import * as AddressBookActionCreators from 'lib/redux/addressbook/addressBookActionCreators'


@connect(store => {
    return {addresses: store.addressBook.addresses}
})
export default class AddressListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {addresses: []};
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(AddressBookActionCreators.fetchAddressList());
    }

    render() {
        return (
            <AddressList addresses={this.props.addresses} />
        )
    }
}