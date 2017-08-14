import {combineReducers} from 'redux';

import customers from './customerReducers';
import authentication from '../customer/loginReducers';
import details from '../customer/customerDetailReducers';
import categories from './categoryReducers';
import addresses from './addressReducers';

import customerAddresses from '../addressbook/fetchAddressListReducers';
import createAddressReducers from '../addressbook/createAddressReducers';


const ecomApp = combineReducers({
    customers,
	customer: combineReducers({
        authentication,
        details
    }),
    // customerLogin,
	categories,
    customerAddresses,
    createAddressReducers
});

export default ecomApp;

