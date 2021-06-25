import React from 'react'

import { Card } from 'react-bootstrap';

import classes from './Product.module.css';

const Product = ({
    title,
    price,
    currency,
    quantity,
    thumbnail,
    condition
}) => (
    <Card className={classes.Product} >
        <div
            style={{
                background: `url(${thumbnail}) 50% 50% no-repeat`,
                width: '100%',
                height: '210px',
            }}
        />


        <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title className={classes.Title}>${price}.00 {currency} </Card.Title>
            <div className='text-muted'>
                {title}
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    Stock: {quantity}
                </div>
                <span
                    className={
                        condition === 'new' ?
                            classes.New :
                            condition === 'used' ?
                                classes.Used :
                                classes.NE
                    }
                >
                    {
                        condition === 'new' ?
                            'Nuevo' :
                            condition === 'used' ?
                                'Usado' : 'N/E'

                    }
                </span>


            </div>
        </Card.Body>
    </Card>
)

export default Product
