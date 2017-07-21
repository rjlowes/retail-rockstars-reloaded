import React, {Component} from 'react';


export default class NavigationItem extends Component {

	render() {
		return (
			<li>
				<span>Nav item</span>
				<a href="/category/{this.props.slug}">{this.props.name}</a>
				{this.props.children}
			</li>
		);
	}
}