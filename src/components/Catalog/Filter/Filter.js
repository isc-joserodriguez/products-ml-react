import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';

import classes from './Filter.module.css';

const Filter = (props) => {

    const changeHandler = (e) => props.orderHandler(e.target.value);
    const conditionHandler = (checked, status) => props.statusHandler(checked ? status : 0);
    const elemetsChangeHandler = (e) => props.elemetsChangeHandler(+e.target.value);

    return (
            <Row className={`${classes.Filter} ${props.hidden ? classes.Hidden : ''}`}>
                <Col lg={3} />
                <Col sm={12} md={4} lg={3} >
                    <b>
                        Ordenar por:
                    </b>
                    <Form.Group className='my-auto'>
                        <Form.Control as='select' onChange={changeHandler}>
                            <option value='1'>Más relevantes</option>
                            <option value='2'>Menor precio</option>
                            <option value='3'>Mayor precio</option>
                        </Form.Control>
                    </Form.Group>

                </Col>
                <Col sm={12} md={4} lg={3} >
                    <b>
                        Condición:
                    </b>
                    <Form.Check
                        type='checkbox'
                        label='Nuevo'
                        onChange={(e) => conditionHandler(e.target.checked, 1)}
                        disabled={props.status === 2 || props.status === 3}
                        checked={props.status === 1}
                    />
                    <Form.Check
                        type='checkbox'
                        label='Usado'
                        onChange={(e) => conditionHandler(e.target.checked, 2)}
                        disabled={props.status === 1 || props.status === 3}
                        checked={props.status === 2}
                    />
                    <Form.Check
                        type='checkbox'
                        label='No especificado'
                        onChange={(e) => conditionHandler(e.target.checked, 3)}
                        disabled={props.status === 1 || props.status === 2}
                        checked={props.status === 3}
                    />
                </Col>
                <Col sm={12} md={4} lg={3} >
                    <b>
                        Elementos:
                    </b>
                    <Form.Group className='my-auto'>
                        <Form.Control as='select' onChange={elemetsChangeHandler}>
                            <option value='30'>30</option>
                            <option value='20'>20</option>
                            <option value='10'>10</option>
                            <option value='5'>5</option>
                        </Form.Control>
                    </Form.Group>

                </Col>
            </Row>
    )
}

export default Filter
