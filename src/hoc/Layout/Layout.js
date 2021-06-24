import React from 'react'
import Navigation from '../../components/Navigation/Navigation';

import classes from './Layout.module.css';

const Layout = (props) => (
    <>
        <Navigation
            query={props.query}
            searchHandler={props.searchHandler}
            queryHandler={props.queryHandler}
            number={props.number}
        />
        <main className={classes.Layout}>
            {props.children}
        </main>
    </>
);

export default Layout
