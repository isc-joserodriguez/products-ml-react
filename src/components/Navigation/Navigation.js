import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';

import Logo from '../../assets/img/logo.png'

import classes from './Navigation.module.css';

const Navigation = (props) => {
    const {
        searchHandler,
        queryHandler,
        query,
        number
    } = props;

    const inputChange = (event) => {
        queryHandler(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(query);
        searchHandler(query);
    }
    return (
        <Navbar className={`${classes.Navbar} ${number === 0 ? classes.Empty : ''}`}>
            <Navbar.Brand>
                <img
                    src={Logo}
                    className='d-inline-block align-top'
                />
            </Navbar.Brand>
            <Form className='d-flex w-100' onSubmit={submitHandler}>
                <Form.Control size='lg' type='text' placeholder='Buscar producto...' className='mr-2' value={query} onChange={inputChange} />
                <Button type='submit' variant='outline-dark'>Buscar</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation
