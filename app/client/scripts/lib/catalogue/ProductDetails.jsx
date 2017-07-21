import React, {Component} from 'react';


export default class ProductDetails extends Component {

    renderProduct() {
        const product = this.props.product;

        if(product) {
            return (
                <div>
                    <h1 className="type-clear-margin" itemProp="name">{product.title}</h1>
                    <p>{product.description}</p>

                     <p className="type-lead" itemScope itemType="http://schema.org/Offer">
                        <span className="price" itemProp="price">&pound;100.00</span>
                    </p>

                    <div itemProp="description">
                        <p>{product.description}</p>
                    </div>
                </div>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        );
    }
}