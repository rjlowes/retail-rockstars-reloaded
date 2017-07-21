import React, {Component} from 'react';

import Navigation from 'lib/navigation/Navigation';


export default class NavigationContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};
    }

    componentDidMount() {
        this.loadCategoryHierarchy();
    }

    loadCategoryHierarchy() {
        fetch('/api/category-hierarchy', {
            method: 'GET'
        }).then(response => response.json())
        .then(data => {
            this.setState({categories: data.cats, depth: data.depth});
        });
    }

    toggleNavigation(e) {
        document.body.classList.remove('show-nav');
    }

    render() {
        return <Navigation categories={this.state.categories} onClick={this.toggleNavigation} />
    }

}
