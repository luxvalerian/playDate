import React from 'react';

import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav>
            <h1>playDate</h1>
            <ul>
                <li>Playdates</li>
                <li>Log in</li>
                <li>Sign up!</li>
            </ul>
        </nav>
    );
}

export default Navbar;