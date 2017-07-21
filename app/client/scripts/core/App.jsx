import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import HomePage from '../modules/home/HomePage';
import ProductListPage from '../modules/catalogue/ProductListPage';
import ProductDetailsPage from '../modules/catalogue/ProductDetailsPage';


import store from 'lib/redux/store';
import {addLastCategory} from 'lib/redux/actions/categoryActions';


export default class App extends Component {

	componentDidMount() {
		let r = addLastCategory('test-cat');
		console.log('r: ', r);
		store.dispatch(addLastCategory('wc_dept_mens-tees'));

	}

	render() {
		return (
			<Router>
				<div>
					<MainLayout>
						<h1>Hello, World!</h1>
					</MainLayout>
					<main>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/category/:categoryId" component={ProductListPage} />
						<Route exact path="/products/:productId" component={ProductDetailsPage} />
					</main>
				</div>
			</Router>
		);
	}
}