import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from 'lib/redux/authentication/authenticationConstants';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    customer: null
}

const loginSuccess = (state, loggedIn) => {
    return state['loggedIn'] = loggedIn;
};

function authenticationReducer(state = initialState, action) {
    console.log('reducing ', action);
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            console.log('LOINGSUCC');
            return {
                ...state,
                isFetching: false,
                isAuthenticated: action.payload.isAuthenticated,
                customer: action.payload.customer
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

export default authenticationReducer;
