'use strict';

const path = require('path');
const passport = require('passport');


exports.register = function (req, res, next) {
    passport.authenticate('local-signup', (err, customer, info) => {
        console.log('pp authenticate');
        if (err) {
            return next(err);
        }

        if (!customer) {
            res.sendStatus(401);
        } else {
            req.login(customer, (err) => {
                if (err) {
                    res.status(500).json({message: "Login failed"});
                } else {
                    res.status(200).json({'isAuthenticated': req.isAuthenticated(), 'customer': customer});
                }
            });
        }
    })(req, res, next);
};


exports.login = function (req, res, next) {
    passport.authenticate('local-login', (err, customer, info) => {
        if (err) return next(err);

        if (!customer) {
            res.sendStatus(401);
        } else {
            req.login(customer, () => {
                if(err) {
                    res.sendStatus(500).json({message: 'Login failed.'});
                } else {
                    res.status(200).json({'isAuthenticated': req.isAuthenticated()});
                }
            });
        }
    })(req, res, next);
};


exports.logout = function (req, res) {
    req.logout();
    res.status(200);
};


/**
 * Logged in customer check
 */
exports.details = function (req, res) {
    if(req.user) {
        res.status(200).json(req.user.getSafeCustomer());
    } else {
        res.status(401).json({message: 'Not authenticated'});
    }
};