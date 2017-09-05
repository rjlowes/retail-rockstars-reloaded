import React, {Component} from 'react';

import ProductListContainer from 'modules/catalogue/list/partials/ProductListContainer';


export default class ProductListPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container">
                <h1>{this.props.match.params.categoryId}</h1>
                <ProductListContainer categoryId={this.props.match.params.categoryId} />
            </section>
        );
    }
}
