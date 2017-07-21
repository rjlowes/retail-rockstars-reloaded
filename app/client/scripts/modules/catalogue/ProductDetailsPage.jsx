import React, {Component} from 'react';

import ProductDetails from 'lib/catalogue/ProductDetails';
import AddToBagForm from 'lib/form/AddToBagForm';
import ProductFeatures from 'lib/catalogue/ProductFeatures';


export default class ProductDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {product: null};

        this.submitBasketForm = this.submitBasketForm.bind(this);
    }

    addToBasket() {
        
    }

    submitBasketForm(data) {
        console.log('parent submit');
        console.log(data);
    }

    componentDidMount() {
        this.getProduct();
    }

	getProduct() {
	    fetch('/api/products/' + this.props.match.params.productId, {
	        method: 'GET',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({product: data});
        });
    }


	render() {
		return (
            <article itemScope itemType="http://schema.org/Product" className="container">
    			<section className="t-product">
                    <div className="t-product__img-col">
                        <img src="/images/products/placeholder/mobile-prod/1.jpg" itemProp="image" className="img-responsive" />
                    </div>
                    <div className="t-product__detail-col">
                        <ProductDetails product={this.state.product} />
                        <AddToBagForm product={this.state.product} submitBasketForm={this.submitBasketForm} />
                        <ProductFeatures />
                    </div>
                </section>
            </article>
		);
	}
}


/**
<div class="t-product">
            <div class="t-product__img-col">
                <img src="{% static 'images/products/placeholder/mobile-prod/1.jpg' %}" itemprop="image" class="img-responsive" />
            </div>
            <div class="t-product__detail-col">
                <h1 class="type-clear-margin" itemprop="name">{{ product.title }}</h1>
                <p>{{ product.description }}</p>

                <div id="basket-form"></div>


                <p class="type-lead" itemscope itemtype="http://schema.org/Offer">
                    <span class="price" itemprop="price">&pound;100.00</span>
                    <!--<span class="availability" itemprop="availability">In stock!</span>-->
                </p>

                <div class="mobile-gallery">
                    <!-- todo -->
                </div>

                <div itemprop="description">
                    <p>{{ product.title }}</p>
                    <!-- Long Description -->
                </div>

                {% include './partials/purchase-form.html' %}
                {% include './partials/product-features.html' %}
            </div>

            <div class="">
                <div class="Wallop Wallop--slide" id="wallop-desktop" wallop-slider>
                    <div class="Wallop-list">
                        <div class="Wallop-item"><img src="images/products/placeholder/mobile-prod/1.jpg" itemprop="image" class="img-responsive" /></div>
                        <div class="Wallop-item"><img src="images/products/placeholder/mobile-prod/1.jpg" itemprop="image" class="img-responsive" /></div>
                        <div class="Wallop-item"><img src="images/products/placeholder/mobile-prod/1.jpg" itemprop="image" class="img-responsive" /></div>
                        <div class="Wallop-item"><img src="images/products/placeholder/mobile-prod/1.jpg" itemprop="image" class="img-responsive" /></div>
                        <div class="Wallop-item"><img src="images/products/placeholder/mobile-prod/1.jpg" itemprop="image" class="img-responsive" /></div>
                    </div>
                    <button class="Wallop-buttonPrevious btn-pager btn-pager--left">
                        <span>Previous</span>
                    </button>
                    <button class="Wallop-buttonNext btn-pager btn-pager--right">
                        <span>Next</span>
                    </button>
                </div>
            </div>
        </div>
*/
