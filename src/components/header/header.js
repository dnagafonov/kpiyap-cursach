import React from 'react';
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return(
        <header>
            <div className="header-text">
                <Link to="/">Autoservice🚘</Link>
            </div>
            <nav className="navigation">
                <Link to="/services">services</Link>
                <Link to="/information">info</Link>
                <Link to="/account">account</Link>
                <Link to="/menu" className="icon">
                    <span/>
                </Link>
            </nav>
        </header>
    )
}

export default Header;