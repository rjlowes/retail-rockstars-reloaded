import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavigationList from 'lib/navigation/NavigationList';
import NavigationItem from 'lib/navigation/NavigationItem';
import MenuButton from 'lib/buttons/MenuButton';

import Search from 'lib/navigation/Search';

export default class Navigation extends Component {

	renderNavigation() {
		return (
			<ul className="nav-list nav-list--l0">
				{this.props.categories.map((category, index) => {
					return (
						<li key={index} className="nav-list__item nav-list__item--l0">
							<Link to={`/category/${category.slug}`} 
								className="nav-list__item-link nav-list__item-link--l0" 
								onClick={this.props.onClick}>{category.name}</Link>
							{category.children.length > 0 && 
								<ul className="nav-list nav-list--l1">
									{category.children.map((category, index) => {
										return(
											<li key={index} className="nav-list__item nav-list__item--l1">
												<Link to={`/category/${category.slug}`} 
													className="nav-list__item-link nav-list__item-link--l0" 
													onClick={this.props.onClick}>{category.name}</Link>
											</li>
										)
									})}
								</ul>
							}
						</li>
					)
				})}
			</ul>
		);
	}

	render() {
		if(this.props.categories) {
			return this.renderNavigation();
		} else {
			return null;
		}
	}
}
