import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginActions';

const defaultState = {
    isFetching: false,
    isAuthenticated: false
}


function loginReducer(state = defaultState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            // return Object.assign({}, state, {
            //     isFetching: false
            // }, action.customer);
            return {
                ...state,
                isFetching: false,
                details: action.customer
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

export default loginReducer;
