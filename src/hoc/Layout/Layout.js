import React from 'react'
import Navigation from '../../components/Navigation/Navigation';

const Layout = (props) => (
    <>
        <Navigation
            query={props.query}
            searchHandler={props.searchHandler}
            queryHandler={props.queryHandler}
        />
        <main>
            {props.children}
        </main>
    </>
);

export default Layout
