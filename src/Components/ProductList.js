import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import axios from 'axios'

function ProductList() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const data = await axios.get(' http://localhost:3007/Products');
        console.log("data", data);
        setProducts(data.data);
    };

    useEffect(() => {
        getProducts();
    }, [])

    console.log("result", products);
    return (
        <div>
            <h1> Products List</h1>
            <div>
                <Container>
                    <Row>
                        {
                            products.map((items) => {
                                console.log(items);
                                return (
                                    <Col xs={12} lg={4} md={6}>
                                        <Card className="mb-4">
                                            <Card.Body>
                                                <Card.Title className="mt-3">{items.name}</Card.Title>
                                                <Card.Text><img style={{width:100,height:200}} src={items.images}/></Card.Text>
                                                <Card.Text style={{color:"red"}}>{items.price}</Card.Text>
                                                <Button variant="primary">Add to cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );

                            })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ProductList
