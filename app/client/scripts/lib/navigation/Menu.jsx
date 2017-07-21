import React, {Component} from 'react';

import NavigationContainer from 'lib/navigation/NavigationContainer';
import MenuButton from 'lib/buttons/MenuButton';
import Search from 'lib/navigation/Search';

const Menu = (props) => {

    return (
        <nav className="g-navigation">
            <MenuButton />
            {/*<Search />*/}
            <NavigationContainer />
        </nav>
    );
};

export default Menu;
