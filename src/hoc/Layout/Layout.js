import React from 'react'
import Navigation from '../../components/Navigation/Navigation';

const Layout = (props) => (
    <>
        <Navigation />
        <main>
            {props.children}
        </main>
    </>
)

export default Layout
