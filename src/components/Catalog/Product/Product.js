import React from 'react'

import { Card, Image } from 'react-bootstrap';

const Product = ({
    title,
    price,
    currency,
    quantity,
    thumbnail,
    condition
}) => (
    <Card
        style={{ width: '210px', margin: '5px' }}
    >
        <div
            style={{
                background: `url(${thumbnail}) 50% 50% no-repeat`,
                width: '210px',
                height: '210px',
            }}
        />


        <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title style={{
                borderBottom: '1px solid gray',
                paddingBottom: '10px'
            }}>${price}.00 {currency} </Card.Title>
            <div className='text-muted'>
                {title}
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    Stock: {quantity}
                </div>
                <span
                    style={{
                        color: condition === 'new' ? 'green' : 'red',
                        border: `1px solid ${condition === 'new' ? 'green' : 'red'}`,
                        padding: '2px 15px',
                        borderRadius: '15px'
                    }}
                >
                    {condition}
                </span>


            </div>
        </Card.Body>
    </Card>
)

export default Product
