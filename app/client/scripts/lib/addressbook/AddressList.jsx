import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import PostalAddress from 'lib/addressbook/PostalAddress';


const AddressList = (props) => {
    console.log(props.addresses);
    if(!props.addresses) {
        return null;
    }

    return (
        <div className="row">
            {props.addresses.map((address, idx) => {
                return (
                    <div className="col-md-4" key={idx}>
                        <div className="card-info type-sml">
                            <div className="card-info__text">
                                <PostalAddress 
                                    title="Mr"
                                    firstname="John"
                                    lastname="Smith"
                                    address1="1 Crendon Street"
                                    townCity="High Wycombe"
                                    county="Bucks"
                                    country="United Kingdom"
                                    postcode="TE456ST"
                                    telephone="07788666555" />
                            </div>
                            <div className="card-info__actions">
                                 <ul className="list-linear">
                                    <li><a href="">edit</a></li>
                                    <li>
                                        <form action="" method="post">
                                            <button>Delete</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


export default AddressList;
