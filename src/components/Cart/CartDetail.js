import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	Row,
	Col,
	Card,
	Button,
	Container,
	InputGroup,
	FormControl,
} from "react-bootstrap";

import { adjustQty, removeFromCart } from "../../redux/Actions/cartActions";

const Cart = (product) => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	console.log(products);

	const [cartTotal, setcartTotal] = useState(0);
	const [cartItemTotal, setcartItemTotal] = useState(0);

	useEffect(() => {
		let total = 0;
		let itemQty = 0;
		products.cart.forEach((item) => {
			total += item.quantity * item.price;
			itemQty += item.quantity;
		});

		setcartTotal(total.toFixed(2));
		setcartItemTotal(itemQty);
	}, [products, cartTotal, cartItemTotal, setcartTotal, setcartItemTotal]);

	console.log("cartItemTotal", cartItemTotal);

	const removeItem = (id) => {
		dispatch(removeFromCart(id));
		console.log("removeItem", id);
	};

	const onChnageHandler = (e) => {
		e.preventDefault();

		// setInput(e.target.value);
		dispatch(adjustQty(e.target.id, e.target.value));
	};

	const renderList = products.cart.map((product) => {
		const {
			title,
			type,
			description,
			filename,
			height,
			width,
			price,
			rating,
			id,
			quantity,
		} = product;

		const total = (price * quantity).toFixed(2);

		return (
			<Col>
				<Card key={id}>
					<Card.Img variant="top" src={filename} height="200px" width="200px" />
					<Card.Body>
						<Card.Title>
							{title} ({type})
						</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Row>
							<Col xs={6}>
								<Card.Text>Rating : {rating} ✨</Card.Text>
							</Col>
							<Col xs={6}>
								<Card.Text>Price : {price} Rs </Card.Text>
							</Col>
						</Row>
						<Row>
							<Col xs={6}>
								<Card.Text>Qty : {quantity} </Card.Text>
							</Col>
							<Col xs={6}>
								<Card.Text>
									Total : {price} * {quantity} = {total} Rs
								</Card.Text>
							</Col>
						</Row>
					</Card.Body>

					<Card.Footer>
						<InputGroup className="mb-3">
							<FormControl
								min={1}
								placeholder="Qty"
								aria-label="Qty"
								aria-describedby="basic-addon2"
								type="number"
								id={id}
								name={title}
								value={quantity}
								onChange={onChnageHandler}
							/>
							<Button variant="outline-secondary" id="button-addon2">
								Qty
							</Button>
						</InputGroup>

						<Button variant="danger" onClick={() => removeItem(id)}>
							Delete Item
						</Button>
					</Card.Footer>
				</Card>
			</Col>
		);
	});

	return (
		<Container>
			<Card className="my-4">
				<Card.Header>Cart Summary</Card.Header>
				<Card.Body>
					<Card.Title>
						Total ({cartItemTotal} item) : {cartTotal} Rs
					</Card.Title>
					<Button variant="success">Checkout</Button>
				</Card.Body>
			</Card>
			<Row xs={1} md={4} className="g-4">
				{renderList}
			</Row>
		</Container>
	);
};

export default Cart;
