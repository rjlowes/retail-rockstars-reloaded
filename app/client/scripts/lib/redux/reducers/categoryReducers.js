// export default (state = [], action) => {
// 	switch(action.type) {
// 		case 'CREATE_USER':
// 			//state.push(action.user);
// 			return [
// 				...state
// 				Object.assign({}, action.user);
// 			];
// 		default:
// 			return state;
// 	}
// };

const initialState = {
	lastCategoryId: null
};

export default(state = initialState, action) => {
	switch(action.type) {
		case 'ADD_LAST_CATEGORY':
			return {
				...state,
				lastCategoryId: action.categoryId
			};
		case 'ADD_CATEGORY_PRODUCTS':
			return {
				...state,
				products: action.products
			}	
		default:
			return state;
	}
}