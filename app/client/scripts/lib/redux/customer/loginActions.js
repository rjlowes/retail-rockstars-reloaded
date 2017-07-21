import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
};


function loginSuccess(json) {
    return {
        type: LOGIN_SUCCESS,
        customer: json,
        receivedAt: Date.now()
    };
};

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE
    }
}

export function login(credentials) {
    return function (dispatch) {
        dispatch(loginRequest());

        return fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
            credentials: 'include'
        })
        .then(response => response.json(), error => dispatch(loginFailure(err)))
        .then(json => dispatch(loginSuccess(json)));
    }
}


// TODO workout how to respond with the redirect!


// submitLogin() {
//         let headers = new Headers({'Content-Type': 'application/json'});
//         let request = new Request('/api/login', {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(this.state.user),
//             credentials: 'include'
//         });

//         fetch(request)
//             .then((response) => response.json())
//             .then(data => {
//                 // TODO this may need to optionally redirect to the checkout
//                 this.props.history.push('/account/dashboard');
//             }).catch(err => {
//                 console.log('err ', err);
//             })
//     }