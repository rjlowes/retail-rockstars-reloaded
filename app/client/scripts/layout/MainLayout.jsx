import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from 'lib/redux/store';

import HomePage from '../modules/home/HomePage';
import ProductListPage from '../modules/catalogue/ProductListPage';
import ProductDetailsPage from '../modules/catalogue/ProductDetailsPage';
import LoginPage from 'modules/authentication/LoginPage';
import RegisterPage from 'modules/authentication/RegisterPage';
import BasketPage from 'modules/checkout/BasketPage';

import AccountLayout from 'modules/account/AccountLayout';
import AccountHome from 'modules/account/AccountHome';
import AddressbookPage from 'modules/account/AddressbookPage';
import AddressNew from 'modules/account/AddressNew';

import Header from './partials/Header';



// import store from 'lib/redux/store';
// import {addLastCategory} from 'lib/redux/actions/categoryActions';

export default class MainLayout extends Component {
	
	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	let r = addLastCategory('test-cat');
	// 	console.log('r: ', r);
	// 	console.log('1');
	// 	console.log(store.getState());
	// 	store.dispatch(addLastCategory('test-cat-2'));
	// 	console.log('2');
	// 	console.log(store.getState());
	// 	store.dispatch(addLastCategory('wc_dept_mens-tees'));
	// }


	// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
	// https://stackoverflow.com/questions/42984597/multiple-nested-routes-in-react-router-dom-v4

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Header />
						<main>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/category/:categoryId" component={ProductListPage} />
								<Route exact path="/products/:productId" component={ProductDetailsPage} />
								<Route exact path="/login" component={LoginPage} />
								<Route exact path="/register" component={RegisterPage} />
								<Route exact path="/basket" component={BasketPage} />
								<AccountLayout>
									<Route path="/account/dashboard" component={AccountHome} />
									<Route exact path="/account/addressbook" component={AddressbookPage} />
									<Route path="/account/addressbook/new" component={AddressNew} />
								</AccountLayout>
							</Switch>
						</main>
					</div>
				</Router>
			</Provider>
		);
	}
}
