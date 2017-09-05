import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Toolbar from 'modules/layout/partials/Toolbar';
import Menu from 'lib/navigation/Menu';
import MenuButton from 'lib/buttons/MenuButton';
import AccountLinks from 'modules/layout/partials/AccountLinks';
import Search from 'modules/layout/partials/Search';
import ShoppingBagSvg from 'lib/svg/ShoppingBagSvg';

import store from 'lib/redux/store';
import {connect} from 'react-redux';

import {getCustomerDetails} from 'lib/redux/customer/customerActions';


@connect((store) => {
    return {
        customer: store.authentication.customer
    };
})
export default class Header extends Component {

    showCustomer() {
        if(this.props.customer) {
            return (<p>**{this.props.customer.firstname}**</p>)
        }

        if(this.props.isAuthenticated) {
            return (<p>yes it is.</p>)
        }

        return null;
    }

	render() {
		return (

			<header className="g-header">
                <div className="g-header__toolbar">
                    <div className="container">
                        <Toolbar />
                    </div>
                </div>

                <div className="g-header__container">
                    <div className="g-header__menu-btn">
                        <MenuButton open={true} />
                    </div>

                    <div className="g-header__logo">
                        <Link to="/" className="logo" href="#/">
                            <img src="/images/logo2.png" className="img-responsive" />
                        </Link>
                    </div>

                    <div className="g-header__navigation">
                        <Menu />
                    </div>

                    <div className="g-header__search">
                        <Search />
                    </div>
                    
                    <div className="g-header__basket">
                        <ShoppingBagSvg />
                    </div>
                </div>
			</header>
		);
	}
}