import React, { useState, useEffect } from 'react'

import Product from './Product/Product';
import Filter from './Filter/Filter';
import Pagination from '../Pagination/Pagination';

import { Container, Row } from 'react-bootstrap';

import classes from './Catalog.module.css';


const Catalog = (props) => {
    const originalProducts = props.products;
    const [products, setProducts] = useState([]);

    //Pagination
    const [page, setPage] = useState(1);
    const [elementsByPage, setElementsByPage] = useState(30);

    //Filter
    const [status, setStatus] = useState(0);

    //Order
    const [order, setOrder] = useState(1);

    const orderHandler = (order) => {
        setPage(1);
        setOrder(order);
        setProducts(
            filter(sorter(originalProducts, order), status)
        )
    }

    const statusHandler = (status) => {
        setPage(1);
        setStatus(status);
        setProducts(
            filter(sorter(originalProducts, order), status)
        );
    }

    const filter = (products, status) => {
        const statusFunc = {
            0: (products) => products,
            1: (products) => products.filter(product => product.condition === 'new'),
            2: (products) => products.filter(product => product.condition === 'used')
        }
        return statusFunc[status]([...products])
    }

    const sorter = (products, order) => {
        const orderFunc = {
            1: (products) => products,
            2: (products) => products.sort((first, next) => first.price - next.price),
            3: (products) => products.sort((first, next) => next.price - first.price)
        }
        return orderFunc[order]([...products]);
    }

    useEffect(() => {
        setProducts(originalProducts)
        setStatus(0);
        setOrder(1);
    }, [originalProducts]);

    return (
        <Container className={classes.Catalog}>
            <Filter
                orderHandler={orderHandler}
                statusHandler={statusHandler}
                status={status}
                number={products.length}
                hidden={products.length === 0 && status === 0}
            />
            {products.length !== 0 ?
                <>
                    <Row className='my-4 justify-content-center'>
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
                    <div className='d-flex justify-content-center'>
                        <Pagination
                            elements={products}
                            page={page}
                            setPage={setPage}
                            elementsByPage={elementsByPage}
                        />
                    </div>
                </> :
                (products.length === 0 && status !== 0) &&
                <div className='d-flex justify-content-center align-items-center'>
                    <h1>El filtro no arrojó resultados.</h1>
                </div>
            }
        </Container>
    )
}

export default Catalog
