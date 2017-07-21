import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class ProductCard extends Component {

	render() {

	    let product = this.props.product;

		return (
			<article className="thumb" itemScope itemType="http://schema.org/Product">
                <Link to={`/products/${product.id}`} itemProp="url" className="thumb__img">
                    <img src="/images/products/placeholder/mobile-prod/1.jpg" className="img-responsive" />
                </Link>
                <div className="thumb__content">
                    <h2 className="type-clear-margin h4">
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </h2>
                    <p className="offer type-sml" itemScope itemType="http://schema.org/Offer">
                        <span className="price" itemProp="price">&pound;100.00</span>
                    </p>
                </div>
			</article>
		);
	}
}