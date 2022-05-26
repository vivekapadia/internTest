import { ActionTypes } from "../constants/actionTypes.js";

export const addCart = (product) => {
	return {
		type: ActionTypes.ADD_CART,
		payload: product,
	};
};

export const adjustQty = (itemID, qty) => {
	return {
		type: ActionTypes.ADJUST_QTY,
		payload: { id: itemID, quantity: qty },
	};
};

export const removeFromCart = (itemID) => {
	return {
		type: ActionTypes.DEL_CART,
		payload: { id: itemID },
	};
};
