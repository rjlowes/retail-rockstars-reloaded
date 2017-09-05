import React, {Component} from 'react';

import JumboBanner from 'lib/banner/JumboBanner';
import ProductList from 'lib/catalogue/ProductList';


export default class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        this.fetchProducts();
    }
    
    fetchProducts() {
        let url = '/api/categories/' + this.props.match.params.categoryId + '/products';
        
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {
            this.setState({products: data});
        });
    }

    render() {
        return (
            <div className="container">
                <JumboBanner />
                <ProductList products={this.state.products} />
            </div>
        );
    }
}
