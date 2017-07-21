'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddressSchema = new Schema({
    title: String,
    firstname: String,
    lastname: String,
    telephone: String,
    address1: String,
    address2: String,
    address3: String,
    townCity: String,
    county: String,
    postcode: String,
    country: String,
    customer: {
        type: Schema.ObjectId,
        ref: 'Customer'
    }
});

module.exports = mongoose.model('Address', AddressSchema);