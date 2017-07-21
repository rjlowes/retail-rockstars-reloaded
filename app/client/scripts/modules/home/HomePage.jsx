import React, {Component} from 'react';

export default class HomePage extends Component {
	render() {
        const containerStyle = {background: '#f5f5f5'};

		return (

			<div>
                <div style={containerStyle}>

                    <div className="container" id="js-gallery">
                        <div className="banner-jumbo">
                            <img src="/images/content/home/gallery/womens-sale.jpg" className="banner-jumbo__bg" alt="Womens, up to 70% off" />
                            <div className="banner-jumbo__content banner-jumbo__content--left">
                                <h2 className="text-jumbo">Womens</h2>
                                <p className="text-small">Up to 70% off sale</p>
                            </div>
                        </div>
                        {/*
                        <div className="banner-jumbo">
                            <img src="/images/content/home/gallery/womens-sale.jpg" className="banner-jumbo__bg" alt="Womens, up to 70% off" />
                            <div className="banner-jumbo__content banner-jumbo__content--left">
                                <h2 className="text-jumbo">Mens</h2>
                                <p className="text-small">Up to 70% off sale</p>
                            </div>
                        </div>
                        */}
                    </div>

                    <div className="container">
                        <div className="row u-spacer-top">
                            <div className="col-sm-4 home-promo">
                                <a href="" className="card">
                                    <img src="/images/content/home/ties/ties.jpg" className="card__image img-responsive" />
                                    <div className="card__meta">
                                        <h2>Awesome shirts</h2>
                                        <p>Look great on your night on the town</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="" className="card">
                                    <img src="/images/content/home/suites/suites.jpg" className="card__image img-responsive" />
                                    <a href="" className="btn">Suit up</a>
                                    <div className="card__meta">
                                        <h2>Awesome shirts</h2>
                                        <p>Look great on your night on the town</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="" className="card">
                                    <img src="/images/content/home/shirts/shirts.jpg" className="card__image img-responsive" />
                                    <div className="card__meta">
                                        <h2>Awesome shirts</h2>
                                        <p>Look great on your night on the town</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row u-spacer-top">
                                <div className="col-sm-6">
                                    <div className="info-block">
                                        <h2 className="text-mb6">Free Shipping &amp; Returns</h2>
                                        <p>Your order will be delivered right to your door at no extra charge. Ditto for returns. It doesn't get easier than that</p>
                                        <a href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="info-block">
                                        <h2 className="text-mb6">Service with a Smile :-)</h2>
                                        <p>If you have comments, questions, or issues, our customer service Ninjas are always on call. Need help? Call a Ninja.</p>
                                        <a href="">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
			</div>
		);
	}
}
