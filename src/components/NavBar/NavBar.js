import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
	const products = useSelector((state) => state.cart);
	console.log(products);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		products.cart.forEach((item) => {
			count += item.quantity;
		});

		setCartCount(count);
	}, [products, cartCount]);

	return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand>
						<NavLink to="/">
							<h1>
								<span className="text-white">
									<span className="text-white">
										<strong>FoodyExpert</strong>
									</span>
								</span>
							</h1>
						</NavLink>
					</Navbar.Brand>

					<Nav className="ml-auto">
						<Nav.Item>
							<NavLink to="/">
								<span className="text-white">
									<strong>Product Listing</strong>
								</span>
							</NavLink>
						</Nav.Item>
					</Nav>

					<Nav className="ml-auto">
						<Nav.Item>
							<NavLink to="/cart">
								<span className="text-white">
									<strong>Cart ({cartCount})</strong>
								</span>
							</NavLink>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
