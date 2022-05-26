import "./App.css";

import Navbar from "./components/NavBar/NavBar";
import ProductComponent from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartDetail from "./components/Cart/CartDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<ProductComponent />} />
				<Route path="/product/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<CartDetail />} />
			</Routes>
		</>
	);
}

export default App;
