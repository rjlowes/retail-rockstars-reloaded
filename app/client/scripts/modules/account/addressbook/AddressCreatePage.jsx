import React, {Component} from 'react';

import Name from 'lib/form/fieldsets/Name';
import Telephone from 'lib/form/fieldsets/Telephone';
import Address from 'lib/form/fieldsets/Address';

import AddressFormContainer from 'lib/form/AddressFormContainer';

export default class AddressNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '', 
            firstname: '', 
            lastname: '', 
            address1: '', 
            address2: '', 
            address3: '',
            townCity: '',
            county: '',
            postcode: '',
            country: ''
        };
    }

    // <Name />
    // <Telephone />
    // <Address />

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Create an addressxxx</h1>
                        <p>Add your delivery or billing info and we'll store it in your address book.</p>

                        <AddressFormContainer address={this.state.address} />
                    </div>
                </div>
                
            </div>
        );
    }
}
