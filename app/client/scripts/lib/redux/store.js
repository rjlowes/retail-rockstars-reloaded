import {createStore, applyMiddleware} from 'redux';
// import { routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';

import ecomApp from 'lib/redux/reducers/index';

// let store = createStore(ecomApp, 'INITIAL_STATE');

let store = createStore(ecomApp, applyMiddleware(thunk));


export default store;


// export default function configureStore(initialState) {
// 	return createStore(rootReducer, initialState);
// }

