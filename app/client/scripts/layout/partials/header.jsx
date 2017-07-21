import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Menu from 'lib/navigation/Menu';
import MenuButton from 'lib/buttons/MenuButton';
import AccountLinks from 'layout/partials/AccountLinks';

import store from 'lib/redux/store';
import {connect} from 'react-redux';

import {getCustomerDetails} from 'lib/redux/customer/customerDetailActions';


@connect((store) => {
    return {
        customer: store.customer.login.details
    };
})
export default class Header extends Component {

    // componentDidMount() {
    //     store.subscribe(() => {
    //         let state = store.getState();
            
    //         if(state.customer.auth.isAuthenticated) {

    //         }
    //     });
    // }

    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState());
        });

        store.dispatch(getCustomerDetails());

    }

    showCustomer() {
        console.log('header showCustomer');
        console.log(this.props.customer);
        if(this.props.customer) {
            return (<p>**{this.props.customer.firstname}**</p>)
        }

        return null;
    }

	render() {
		return (
			<header className="g-header">
                <div className="g-header__container">
                    <div className="g-header__menu-btn">
                        <MenuButton open={true} />
                    </div>
                    {/* 
                    <AccountLinks customer={this.props.customer} />
                    */}

                    <div className="g-header__navigation">
                        <Menu />
                    </div>

                    <div className="g-header__logo">
                        <Link to="/" className="logo" href="#/">
                            <img src="/images/logo2.png" className="img-responsive" />
                        </Link>
                    </div>

                    <div className="g-header__session">
                        basket etc
                    </div>
                </div>
			</header>
		);
	}
}