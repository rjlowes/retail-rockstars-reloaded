import React, {Component} from 'react';

import ProductCard from 'lib/catalogue/ProductCard';


export default class ProductList extends Component {

	// '/api/categories/:categoryId/products'

	constructor(props) {
		super(props);

	}

	componentDidMount() {
		console.log(this.props.params);
	}

	fetchProducts() {

	}

	render() {
		return (
			<ul className="row u-spacer-top">
				{this.props.products.map((product, index) => {
					return (
						<li key={index}  className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4 col-lg-3">
                            <ProductCard product={product} />
						</li>
					)
				})}
			</ul>
		);
	}
}