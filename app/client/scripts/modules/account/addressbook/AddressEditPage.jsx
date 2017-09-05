import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import AddressFormContainer from 'lib/form/AddressFormContainer';
import * as AddressBookActionCreators from 'lib/redux/addressbook/addressBookActionCreators'


@connect((state, props) => {
    return {
        address: _.find(state.addressBook.addresses, '_id', props.match.params.addressId)
    }
})
export default class AddressEditPage extends Component {

    componentDidMount() {
        // If address is empty then grab the list
        let {dispatch} = this.props;
        dispatch(AddressBookActionCreators.fetchAddressList());
    }


    render() {
        return (
            <div>
                <Link to="/account/addressbook">back to list</Link>
                {this.props.address &&
                    <AddressFormContainer address={this.props.address} />}
                <div className="">
                    Address edit ---- 
                    {this.props.address &&
                        <p>a) {this.props.address.firstname}</p>}
                </div>
                
            </div>
        );
    }
}