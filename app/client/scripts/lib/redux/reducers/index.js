import {combineReducers} from 'redux';

import customers from './customerReducers';
import login from '../customer/loginReducers';
import details from '../customer/customerDetailReducers';
import categories from './categoryReducers';
import addresses from './addressReducers';

import customerAddresses from '../addressbook/fetchAddressListReducers';
import createAddressReducers from '../addressbook/createAddressReducers';


const ecomApp = combineReducers({
    customers,
	customer: combineReducers({
        login,
        details
    }),
    // customerLogin,
	categories,
    customerAddresses,
    createAddressReducers
});

export default ecomApp;

