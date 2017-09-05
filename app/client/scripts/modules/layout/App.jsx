import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import {
	ConnectedRouter
} from 'react-router-redux';
console.log(ConnectedRouter);

import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// import store from 'lib/redux/store';
import initStore from 'lib/redux/store';
// import {history} from 'lib/redux/store';

import HomePage from 'modules/home/HomePage';
import ProductListPage from 'modules/catalogue/list/ProductListPage';
import ProductDetailsPage from 'modules/catalogue/ProductDetailsPage';
import LoginPage from 'modules/authentication/LoginPage';
import RegisterPage from 'modules/authentication/RegisterPage';
import BasketPage from 'modules/checkout/BasketPage';

import AccountLayout from 'modules/account/AccountLayout';
import DashboardPage from 'modules/account/dashboard/DashboardPage';
import AddressListPage from 'modules/account/addressbook/AddressListPage';
import AddressCreatePage from 'modules/account/addressbook/AddressCreatePage';
import AddressbookDetail from 'modules/account/addressbook/AddressbookDetail';
import AddressEditPage from 'modules/account/addressbook/AddressEditPage';

import Header from 'modules/layout/partials/Header';

const history = createHistory();
const store = initStore(history);


export default class App extends Component {
	
	constructor(props) {
		super(props);
	}

	// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
	// https://stackoverflow.com/questions/42984597/multiple-nested-routes-in-react-router-dom-v4

	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
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
								<Route path="/account/dashboard" component={DashboardPage} />
								<AccountLayout>
									
									<Route exact path="/account/addressbook" component={AddressListPage} />
									<Route path="/account/addressbook/new" component={AddressCreatePage} />
									<Route path="/account/addressbook/:addressId" component={AddressbookDetail} />
									<Route path="/account/addressbook/:addressId/edit" component={AddressEditPage} />
								</AccountLayout>
							</Switch>
						</main>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}
