import { combineReducers } from "redux";

import { productsReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

// combine all the individual reducers
export default combineReducers({
	cart: cartReducer,
	allProducts: productsReducer,
	product: selectedProductsReducer,
});
