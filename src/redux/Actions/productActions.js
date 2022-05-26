import { ActionTypes } from "../constants/actionTypes.js";
import axios from "axios";

export const setProducts = () => async (dispatch) => {
	try {
		const response = await axios
			.get("https://api4286.s3.ap-south-1.amazonaws.com/products.json")
			.catch((err) => {
				console.log(err);
			});

		dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
	} catch (error) {
		console.log(error);
	}
};

export const selectedProduct = (ProductId) => async (dispatch) => {
	const position = ProductId.substring(2);

	try {
		const response = await axios
			.get(`https://api4286.s3.ap-south-1.amazonaws.com/products.json`)
			.catch((err) => {
				console.log(err);
			});

		const FIND = response.data[position];
		dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: FIND });
	} catch (error) {
		console.log(error);
	}
};
