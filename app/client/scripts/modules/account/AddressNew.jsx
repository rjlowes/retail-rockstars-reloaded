import React, {Component} from 'react';

import Name from 'lib/form/fieldsets/Name';
import Telephone from 'lib/form/fieldsets/Telephone';
import Address from 'lib/form/fieldsets/Address';

import AddressFormContainer from 'lib/form/AddressFormContainer';

export default class AddressNew extends Component {



    // <Name />
    // <Telephone />
    // <Address />

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Create an address</h1>
                        <p>Add your delivery or billing info and we'll store it in your address book.</p>

                        <AddressFormContainer />
                    </div>
                </div>
                
            </div>
        );
    }
}
