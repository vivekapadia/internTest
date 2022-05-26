import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { addCart } from "../../redux/Actions/cartActions";
import { selectedProduct } from "../../redux/Actions/productActions";

import { Row, Col, Card, Alert, Container, Button } from "react-bootstrap";

const ProductDetail = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);
	console.log("Single", product);

	if (productId && productId !== "") {
		dispatch(selectedProduct(productId));
	}

	const addProduct = (product) => {
		dispatch(addCart(product));
	};

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
		<>
			<Container className="p-4">
				<Alert variant="success">
					<Alert.Heading>Hey, nice to see you</Alert.Heading>
					<p>
						Fruits and Vegetables are sweet and delicious and have healthy fats
						and carbohydrates, which are suitable for kids.
					</p>
				</Alert>

				<Card className="shadow-sm p-4">
					<Card.Title style={{ color: "green" }}>{title}</Card.Title>
					<Row>
						<Col xs={10}>
							<Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
						</Col>
						<Col xs={2}>
							<Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
						</Col>
					</Row>
					<Card.Img
						variant="top"
						src={filename}
						height={height}
						width={width}
						className="rounded"
					/>

					<Card.Body>
						<Row>
							<Col xs={12} md={6}>
								<Card.Text>{description}</Card.Text>
							</Col>
							<Col xs={6} md={3}>
								<Card.Text>Rating : {rating} ✨</Card.Text>
							</Col>
							<Col xs={6} md={3}>
								<Card.Text>Price : {price} Rs </Card.Text>
							</Col>
						</Row>
					</Card.Body>
					<Card.Footer>
						<Button variant="primary" onClick={() => addProduct(product)}>
							Add To Cart
						</Button>
					</Card.Footer>
				</Card>
			</Container>
		</>
	);
};

export default ProductDetail;
