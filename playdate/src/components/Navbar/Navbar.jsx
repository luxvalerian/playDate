import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>playDate</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/playdates">Playdates</Link>
                </li> 
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up!</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;