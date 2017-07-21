import React, {Component} from 'react';


const PostalAddress = (props) => {

    let fullName = props.title + ' ' + props.firstname + ' ' + props.lastname;

    return (
        <div itemScope itemType="http://schema.org/Person" className="type-sml">
            <span className="strong" itemProp="name">{fullName}</span>

            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="streetAddress">
                    {props.address1}<br />
                    {props.address2}<br />
                    {props.address3}
                </span>
                <span itemProp="addressLocality">{props.townCity}</span>,
                <span itemProp="addressRegion">{props.county}</span>
                <span itemProp="addressCountry">{props.country}</span><br />
                <span itemProp="postalCode">{props.postcode}</span><br />
            </div>
            <span itemProp="telephone">{props.telephone}</span>
        </div>
    );
};

export default PostalAddress;