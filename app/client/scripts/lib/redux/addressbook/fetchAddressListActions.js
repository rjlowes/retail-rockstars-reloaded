export const ADDRESSESBOOK_FETCH_REQUEST = "ADDRESSESBOOK_FETCH_REQUEST";
export const ADDRESSESBOOK_FETCH_SUCCESS = "ADDRESSESBOOK_FETCH_SUCCESS";
export const ADDRESSESBOOK_FETCH_ERROR = "ADDRESSESBOOK_FETCH_ERROR";

function addressListRequest() {
    console.log('addressListRequest');
    return {
        type: ADDRESSESBOOK_FETCH_REQUEST
    };
}


function addressListSuccess(json) {
    console.log('addressListSuccess');
    return {
        type: ADDRESSESBOOK_FETCH_SUCCESS,
        addressbook: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}

function addressListFailure(err) {
    return {
        type: ADDRESSESBOOK_FETCH_ERROR
    };
}

export function fetchAddressList() {
    console.log('fetchAddressList');
    return function(dispatch) {
        console.log('in disp');
        dispatch(addressListRequest());
        
        return fetch('/api/customer/addresses', {method: 'GET', credentials: 'include'})
            .then(response => response.json(), error => console.log('An error occurred ', error))
            .then(json => dispatch(addressListSuccess(json)));
    }
}