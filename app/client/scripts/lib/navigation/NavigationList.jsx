import React, {Component} from 'react';


export default class NavigationList extends Component {

	render() {
		return (
			<ul>
				<p>testing navlist</p>
				{this.props.children}
			</ul>
		);
	}
}