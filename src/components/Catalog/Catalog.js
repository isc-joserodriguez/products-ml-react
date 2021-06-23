import React, { useState } from 'react'

import Product from './Product/Product';
import Pagination from '../Pagination/Pagination';

import { Container, Row } from 'react-bootstrap';


const Catalog = (props) => {
    const { products } = props;
    const [page, setPage] = useState(1);
    const [elementsByPage, setElementsByPage] = useState(30);

    return (
        <Container>
            <Row>
                {[...products].splice(elementsByPage * (page - 1), elementsByPage).map(product => (
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
            <div className="d-flex justify-content-center">
                <Pagination
                    elements={products}
                    page={page}
                    setPage={setPage}
                    elementsByPage={elementsByPage}
                />
            </div>
        </Container>
    )
}

export default Catalog
