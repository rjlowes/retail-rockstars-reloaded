import React, {Component} from 'react';

import ProductList from 'modules/catalogue/list/partials/ProductList';


export default class ProductListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        this.fetchProducts();
    }
    
    fetchProducts() {
        let url = '/api/categories/' + this.props.categoryId + '/products';
        
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({products: data});
        });
    }

    render() {
        return <ProductList products={this.state.products} />;
    }
}