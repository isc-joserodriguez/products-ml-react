import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';

import classes from './Navigation.module.css';

const Navigation = () => (
    <Navbar bg='warning' className={classes.Navbar}>
        <Navbar.Brand>ML</Navbar.Brand>
        <Form className="d-flex w-100">
            <Form.Control size='lg' type='text' placeholder='Search' className='mr-5' />
            <Button variant='outline-light'>Search</Button>
        </Form>
    </Navbar>
)

export default Navigation
