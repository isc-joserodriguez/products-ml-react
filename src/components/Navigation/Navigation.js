import React from 'react'
import { Navbar, Form, Button } from 'react-bootstrap';

import { BsSearch } from 'react-icons/bs'

import Logo from '../../assets/img/logo.png'
import LogoMin from '../../assets/img/logo-min.svg'

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
        searchHandler(query);
    }
    return (
        <Navbar className={`${classes.Navbar} ${number === 0 ? classes.Empty : ''}`}>
            <Navbar.Brand>
                <img
                    alt='https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'
                    src={Logo}
                    className={classes.Logo}
                />
                <img
                    alt='https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png'
                    src={LogoMin}
                    className={classes.LogoMin}
                />
            </Navbar.Brand>
            <Form className='d-flex w-100' onSubmit={submitHandler}>
                <Form.Control size='lg' type='text' placeholder='Buscar producto...' className='mr-2' value={query} onChange={inputChange} />
                <Button type='submit' variant='outline-dark'>
                    <BsSearch />
                </Button>
            </Form>
        </Navbar>
    )
}

export default Navigation
