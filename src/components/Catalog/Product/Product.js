import React from 'react'

import { Card, Button } from 'react-bootstrap';

const Product = ({
    title,
    price,
    currency,
    quantity,
    thumbnail,
    condition
}) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
            <Card.Title>${price}.00 {currency} </Card.Title>
            {title}
            <br />
            {currency}
            <br />
            {quantity}
            <br />
            {condition}
            <br />
        </Card.Body>
    </Card>
)

export default Product
