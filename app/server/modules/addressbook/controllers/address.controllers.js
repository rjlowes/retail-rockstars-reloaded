'use strict';

const mongoose = require('mongoose');
const Address = mongoose.model('Address');


exports.list = function (req, res) {
    console.log('addreebook.list: ', req.user);
    Address.find().where('customer').equals(req.user._id).exec((err, addresses) => {
        if(err) {
            return res.status(400).send({message: err.message});
        } else {
            return res.json(addresses);
        }
    });
};

exports.create = function (req, res) {
    let address = new Address();
    address.title = req.body.title;
    address.firstname = req.body.firstname;
    address.lastname = req.body.lastname;
    address.telephone = req.body.telephone;
    address.address1 = req.body.address1;
    address.address2 = req.body.address2;
    address.address3 = req.body.address3;
    address.townCity = req.body.townCity;
    address.county = req.body.county;
    address.postcode = req.body.postcode;
    address.country = req.body.country;
    address.customer = req.user;

    address.save(err => {
        if(err) {
            return res.status(400).send({message: err.message, errors: err.errors});
        } else {
            res.json(address);
        }
    })
};
