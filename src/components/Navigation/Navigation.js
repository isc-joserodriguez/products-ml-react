import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';

import classes from './Navigation.module.css';

const Navigation = (props) => {
    const {
        searchHandler,
        queryHandler,
        query
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
        <Navbar bg='warning' className={classes.Navbar}>
            <Navbar.Brand>ML</Navbar.Brand>
            <Form className="d-flex w-100" onSubmit={submitHandler}>
                <Form.Control size='lg' type='text' placeholder='Search' className='mr-5' value={query} onChange={inputChange} />
                <Button type='submit' variant='outline-light'>Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation
