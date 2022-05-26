import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { setProducts } from "../../redux/Actions/productActions";
import { addCart } from "../../redux/Actions/cartActions";

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProducts());
	}, [dispatch]);

	const addProduct = (product) => {
		dispatch(addCart(product));
	};

	const renderList = products.map((product) => {
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
		} = product;

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
					</Card.Body>
					<Card.Footer>
						<Row>
							<Col xs={6}>
								<Link to={"/product/" + id}>
									<Button variant="primary">Details</Button>
								</Link>
							</Col>

							<Col xs={6}>
								<Button variant="success" onClick={() => addProduct(product)}>
									+Cart
								</Button>
							</Col>
						</Row>
					</Card.Footer>
				</Card>
			</Col>
		);
	});

	return (
		<Container>
			<Row xs={1} md={4} className="g-4 m-4">
				{renderList}
			</Row>
		</Container>
	);
};

export default ProductComponent;
