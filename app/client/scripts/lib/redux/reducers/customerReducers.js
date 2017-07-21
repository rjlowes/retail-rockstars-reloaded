export default (state = {}, action) => {
	switch(action.type) {
		// case 'CREATE_USER':
		// 	//state.push(action.user);
		// 	return [
		// 		...state,
		// 		Object.assign({}, action.user)
		// 	];
		case 'REGISTER_CUSTOMER':
			return {
				...state,
				customer: action.customer
			};
		case 'CUSTOMER_TEST':
			return {
				...state,
				test: action.test
			};
		default:
			return state;
	}
};

