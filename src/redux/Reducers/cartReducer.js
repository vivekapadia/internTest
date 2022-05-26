import { ActionTypes } from "../constants/actionTypes";

const initialState = {
	cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_CART:
			console.log(state, payload);

			// Check if Product is Already Exist in Cart
			const isExist = state.cart.find((item) => item.id === payload.id)
				? true
				: false;

			console.log("IS", isExist);

			return {
				...state,
				cart: isExist
					? state.cart.map((item) => {
							if (item.id === payload.id) {
								return { ...item, quantity: item.quantity + 1 };
							} else {
								return item;
							}
					  })
					: [...state.cart, { ...payload, quantity: 1 }],
			};

		case ActionTypes.DEL_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== payload.id),
			};

		case ActionTypes.ADJUST_QTY:
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.id === payload.id) {
						return { ...item, quantity: +payload.quantity };
					} else {
						return item;
					}
				}),
			};

		default:
			return state;
	}
};
