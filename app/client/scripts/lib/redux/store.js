import {createStore, combineReducers, applyMiddleware} from 'redux';
import {ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from 'lib/redux/reducers/index';


const initStore = (history) => {
    let middleware = routerMiddleware(history);

    return createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }), 
        applyMiddleware(thunk, middleware)
    );
};

export default initStore;
