import React from 'react'

import Product from './Product/Product';
import { Container, Row } from 'react-bootstrap';

const Catalog = (props) => {
    const { products } = props;

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        currency={product.currency_id}
                        quantity={product.available_quantity}
                        thumbnail={product.thumbnail}
                        condition={product.condition}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default Catalog
